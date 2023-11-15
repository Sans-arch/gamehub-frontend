import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MainSlider } from '../../components/MainSlider';

describe('MainSlider test suite', () => {
  test('should render MainSlider component', async () => {
    render(<MainSlider />);

    const mainSliderContainer = screen.getByTestId('main-slider-container');

    expect(mainSliderContainer).toBeInTheDocument();
  });
});
