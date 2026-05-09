import type { Meta, StoryObj } from '@storybook/nextjs'
import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Ecommerce/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Add to cart', variant: 'primary', size: 'md' },
}

export const Secondary: Story = {
  args: { children: 'Save for later', variant: 'secondary', size: 'md' },
}

export const Large: Story = {
  args: { children: 'Checkout now', variant: 'primary', size: 'lg' },
}

export const Loading: Story = {
  args: { children: 'Adding…', variant: 'primary', size: 'md', loading: true },
}

export const Disabled: Story = {
  args: { children: 'Out of stock', variant: 'primary', size: 'md', disabled: true },
}
