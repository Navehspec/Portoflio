import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

test('renders project title', () => {
  const project = {
    id: 'p-01',
    title: 'Test Project',
    short: 'A short description',
    image: 'test.jpg',
  };
  render(<ProjectCard project={project} />);
  const titleElement = screen.getByText(/Test Project/i);
  expect(titleElement).toBeInTheDocument();
});
