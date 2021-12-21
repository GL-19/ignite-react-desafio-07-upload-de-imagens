import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  return (
    <>
      <SimpleGrid gridTemplateColumns="repeat(3, 1fr)" gap="2rem">
        {cards.map(card => {
          return (
            <Card
              key={card.id}
              data={card}
              viewImage={test => console.log(test)}
            />
          );
        })}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
