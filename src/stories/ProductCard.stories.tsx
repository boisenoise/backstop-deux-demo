import type { Meta, StoryObj } from '@storybook/nextjs'
import { ProductCard } from '../components/ProductCard'

const meta: Meta<typeof ProductCard> = {
  title: 'Ecommerce/ProductCard',
  component: ProductCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductCard>

export const Default: Story = {
  args: {
    name: 'Minimalist Leather Wallet',
    description: 'Slim bifold design with RFID blocking. Fits 8 cards and cash. Full-grain leather.',
    price: 49.99,
  },
}

export const OnSale: Story = {
  args: {
    name: 'Wireless Noise-Cancelling Headphones',
    description: '40-hour battery life, foldable design, premium audio drivers.',
    price: 149.99,
    originalPrice: 249.99,
    badge: 'Sale',
  },
}

export const NewArrival: Story = {
  args: {
    name: 'Merino Wool Crew Neck',
    description: 'Ultra-fine 18.5 micron merino. Machine washable. 12 colors available.',
    price: 89.99,
    badge: 'New',
  },
}
