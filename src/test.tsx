import React from 'react';
import { render, cleanup } from './test-utils';
import useInterval, { useInterval as namedHook } from '.';

beforeEach(cleanup);

type IntervalProps = {
  fn: () => void;
  delay: number | null;
  immediate?: boolean;
};

const Interval = ({ fn, delay, immediate }: IntervalProps) => {
  useInterval(fn, delay, immediate);
  return null;
};

describe('useInterval', () => {
  it('exports a function (default)', () => {
    expect(useInterval).toBeInstanceOf(Function);
  });
  it('exports a function (named)', () => {
    expect(namedHook).toBeInstanceOf(Function);
  });
  it('hooks identity are the same', () => {
    expect(useInterval).toBe(namedHook);
  });
  it('is a named function', () => {
    // aids stack trace debugging.
    expect(useInterval.name).toBe('useInterval');
  });

  describe('regular mode (delayed)', () => {
    jest.useFakeTimers();

    const fn: () => void = jest.fn();
    const { container } = render(<Interval fn={fn} delay={500} />);

    expect(fn).toBeCalledTimes(0 /* not called on first render */);
    jest.advanceTimersByTime(500);
    expect(fn).toBeCalledTimes(1);
    jest.advanceTimersByTime(1500);
    expect(fn).toBeCalledTimes(4);

    it('cancels interval when delay is null', () => {
      render(<Interval immediate fn={fn} delay={null} />, { container });
      jest.advanceTimersByTime(1500);
      expect(fn).toBeCalledTimes(4);
    });

    jest.clearAllTimers();
  });

  describe('immediate mode', () => {
    jest.useFakeTimers();

    const fn = jest.fn();
    const { container } = render(<Interval immediate fn={fn} delay={500} />);

    expect(fn).toBeCalledTimes(1 /* called immediatelly on render */);
    jest.advanceTimersByTime(500);
    expect(fn).toBeCalledTimes(2);
    jest.advanceTimersByTime(1500);
    expect(fn).toBeCalledTimes(5);

    it('cancels interval when delay is null', () => {
      render(<Interval immediate fn={fn} delay={null} />, { container });
      jest.advanceTimersByTime(1500);
      expect(fn).toBeCalledTimes(5);
    });

    jest.clearAllTimers();
  });
});
