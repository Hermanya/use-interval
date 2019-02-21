import React from 'react';
import { render, cleanup } from './test-utils';
import useInterval, { useInterval as namedHook } from '.';

beforeEach(cleanup);

type IntervalProps = { fn: () => void; delay: number | null };
const Interval = ({ fn, delay }: IntervalProps) => {
  useInterval(fn, delay);
  return null;
};

describe('useInterval', () => {
  it('exports a function (default)', () => {
    expect(useInterval).toBeInstanceOf(Function);
  });
  it('exports a function (named)', () => {
    expect(useInterval).toBeInstanceOf(Function);
  });
  it('hooks identity are the same', () => {
    expect(useInterval).toBe(namedHook);
  });
  it('is a named function', () => {
    // aids stack trace debugging.
    expect(useInterval.name).toBe('useInterval');
  });

  jest.useFakeTimers();

  const fn: () => void = jest.fn();
  const { container } = render(<Interval fn={fn} delay={500} />);

  expect(fn).toBeCalledTimes(0 /* not called on first render */);
  jest.advanceTimersByTime(500);
  expect(fn).toBeCalledTimes(1);
  jest.advanceTimersByTime(1500);
  expect(fn).toBeCalledTimes(4);

  it('cancels interval when delay is null', () => {
    render(<Interval fn={fn} delay={null} />, { container });
    jest.advanceTimersByTime(1500);
    expect(fn).toBeCalledTimes(4);
  });

  jest.clearAllTimers();
});
