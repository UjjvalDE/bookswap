'use client';

import { Books, Cart } from '@prisma/client';  // Import generated types from Prisma
import React from 'react';
import { Card, Metric, Text } from '@tremor/react';
import Image from 'next/image';
import { Typography } from '@material-tailwind/react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { removeCartItem } from '../_actions';

// Update the props to use the Prisma types directly
const CartItem = ({ book, item }: { book: Books; item: Cart }) => {
  const {
    audience,
    author,
    contact,
    genre,
    image,
    name,
    price,
    theme,
    tone,
  } = book;
  const { id, bookId, userId } = item;

  // Handle removing item from the cart
  const handleDeleteCartItem = async () => {
    try {
      // Assuming removeCartItem is an action that handles cart item removal
      const { data, error } = await removeCartItem(id);

      if (error) {
        console.error('Error removing cart item:', error);
        return;
      }
      console.log('Successfully removed cart item:', data);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };

  return (
    <Card className="rounded-md p-3 my-3 flex">
      <div className="relative w-[150px] h-[150px]">
        <Image
          src={`data:image/jpeg;base64,${image}`}  // Assuming image is base64 encoded
          alt={name}
          fill
          className="aspect-square rounded-md"
        />
      </div>
      <div className="px-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
          <Typography
            color="blue-gray"
            variant="paragraph"
            className="font-medium text-md"
          >
            {name}
          </Typography>
          <Metric>€ {price}</Metric>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 font-sans"
        >
          Book By{' '}
          <code className="text-zinc-950 font-semibold">
            {author}
          </code>
        </Typography>
        <div className="mt-2 flex flex-wrap justify-start gap-2">
          <Badge variant={'secondary'}>{audience}</Badge>
          <Badge variant={'secondary'}>{tone}</Badge>
          <Badge variant={'secondary'}>{genre}</Badge>
          <Badge variant={'secondary'}>{theme}</Badge>
        </div>
        <div className="mt-4">
          <form onSubmit={(e) => { e.preventDefault(); handleDeleteCartItem(); }}>
            <Button variant={'destructive'} type="submit">
              Remove From Cart
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
