import type { Meta, StoryObj } from '@storybook/nextjs'
import { PriceBadge } from '../components/PriceBadge'

const meta: Meta<typeof PriceBadge> = {
  title: 'Ecommerce/PriceBadge',
  component: PriceBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PriceBadge>

export const FullPrice: Story = {
  args: { price: 89.99 },
}

export const OnSale: Story = {
  args: { price: 59.99, originalPrice: 89.99 },
}

export const DeepDiscount: Story = {
  args: { price: 29.99, originalPrice: 89.99 },
}
