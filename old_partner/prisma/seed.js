import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()
  await prisma.brand.deleteMany()
  await prisma.productType.deleteMany()

  await prisma.brand.createMany({
    data: [
      { name: 'DC Comics' },
      { name: 'Marvel' },
      { name: 'Nintendo' },
      { name: 'Bandai' },
      { name: 'Vintage Toys' },
    ],
  })

  await prisma.productType.createMany({
    data: [
      { name: 'Figurines' },
      { name: 'Maquettes' },
      { name: 'Peluches' },
      { name: 'Jeux de construction' },
      { name: 'Jeux vidéo rétro' },
    ],
  })

  const brandMap = Object.fromEntries(
    (await prisma.brand.findMany()).map(b => [b.name, b.id])
  )

  const typeMap = Object.fromEntries(
    (await prisma.productType.findMany()).map(t => [t.name, t.id])
  )

  const products = [
    {
      name: 'Figurine Batman Vintage',
      description: 'Batman DC Comics années 90',
      price: 39.99,
      imageUrl: '/images/batman.jpg',
      brandId: brandMap['DC Comics'],
      typeId: typeMap['Figurines'],
    },
    {
      name: 'Figurine Superman Collector',
      description: 'Superman édition rétro',
      price: 42.5,
      imageUrl: '/images/superman.jpg',
      brandId: brandMap['DC Comics'],
      typeId: typeMap['Figurines'],
    },
    {
      name: 'Figurine Spider-Man Retro',
      description: 'Spider-Man années 80',
      price: 36.9,
      imageUrl: '/images/spiderman.jpg',
      brandId: brandMap['Marvel'],
      typeId: typeMap['Figurines'],
    },
    {
      name: 'Goldorak Métal Vintage',
      description: 'Figurine Goldorak métal',
      price: 89.99,
      imageUrl: '/images/goldorak.jpg',
      brandId: brandMap['Bandai'],
      typeId: typeMap['Figurines'],
    },
    {
      name: 'Transformers Optimus Prime G1',
      description: 'Transformers génération 1',
      price: 59.9,
      imageUrl: '/images/optimus.jpg',
      brandId: brandMap['Bandai'],
      typeId: typeMap['Figurines'],
    },

    {
      name: 'Maquette Ferrari F40',
      description: 'Ferrari F40 échelle 1/24',
      price: 44.99,
      imageUrl: '/images/ferrari.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Maquettes'],
    },
    {
      name: 'Maquette Porsche 911',
      description: 'Porsche 911 classique',
      price: 41.5,
      imageUrl: '/images/porsche.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Maquettes'],
    },
    {
      name: 'Maquette Apollo 11',
      description: 'Module lunaire Apollo',
      price: 72.0,
      imageUrl: '/images/apollo.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Maquettes'],
    },
    {
      name: 'Vaisseau Star Wars X-Wing',
      description: 'Maquette X-Wing collector',
      price: 64.9,
      imageUrl: '/images/xwing.jpg',
      brandId: brandMap['Marvel'],
      typeId: typeMap['Maquettes'],
    },
    {
      name: 'Maquette Ford Mustang 1967',
      description: 'Mustang rétro',
      price: 39.9,
      imageUrl: '/images/mustang.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Maquettes'],
    },

    {
      name: 'Peluche Ours Brun 1985',
      description: 'Ours en peluche vintage',
      price: 24.99,
      imageUrl: '/images/ours.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Peluches'],
    },
    {
      name: 'Peluche Lapin Rétro',
      description: 'Lapin tissu années 70',
      price: 21.5,
      imageUrl: '/images/lapin.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Peluches'],
    },
    {
      name: 'Peluche Mickey Vintage',
      description: 'Mickey Mouse rétro',
      price: 29.99,
      imageUrl: '/images/mickey.jpg',
      brandId: brandMap['Marvel'],
      typeId: typeMap['Peluches'],
    },
    {
      name: 'Peluche Snoopy Classic',
      description: 'Snoopy original',
      price: 27.9,
      imageUrl: '/images/snoopy.jpg',
      brandId: brandMap['Marvel'],
      typeId: typeMap['Peluches'],
    },
    {
      name: 'Peluche Pikachu 1999',
      description: 'Pikachu première génération',
      price: 34.5,
      imageUrl: '/images/pikachu.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Peluches'],
    },

    {
      name: 'LEGO Space Classic',
      description: 'LEGO espace rétro',
      price: 59.9,
      imageUrl: '/images/lego-space.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux de construction'],
    },
    {
      name: 'LEGO Castle Vintage',
      description: 'Château LEGO années 80',
      price: 69.9,
      imageUrl: '/images/lego-castle.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux de construction'],
    },
    {
      name: 'Meccano Métal Rétro',
      description: 'Jeu Meccano vintage',
      price: 49.99,
      imageUrl: '/images/meccano.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Jeux de construction'],
    },
    {
      name: 'Briques Bois Vintage',
      description: 'Jeu de construction bois',
      price: 32.0,
      imageUrl: '/images/bois.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Jeux de construction'],
    },
    {
      name: 'Puzzle Rétro 1000 pièces',
      description: 'Illustration années 70',
      price: 19.9,
      imageUrl: '/images/puzzle.jpg',
      brandId: brandMap['Vintage Toys'],
      typeId: typeMap['Jeux de construction'],
    },

    {
      name: 'Game Boy Classic',
      description: 'Game Boy originale',
      price: 89.9,
      imageUrl: '/images/gameboy.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux vidéo rétro'],
    },
    {
      name: 'Game & Watch Nintendo',
      description: 'Console Game & Watch',
      price: 74.5,
      imageUrl: '/images/gamewatch.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux vidéo rétro'],
    },
    {
      name: 'Sega Mega Drive',
      description: 'Console Sega Mega Drive',
      price: 119.0,
      imageUrl: '/images/megadrive.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux vidéo rétro'],
    },
    {
      name: 'Sonic the Hedgehog',
      description: 'Jeu Sonic Mega Drive',
      price: 29.9,
      imageUrl: '/images/sonic.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux vidéo rétro'],
    },
    {
      name: 'Pokémon Bleu',
      description: 'Version originale Pokémon Bleu',
      price: 39.9,
      imageUrl: '/images/pokemon.jpg',
      brandId: brandMap['Nintendo'],
      typeId: typeMap['Jeux vidéo rétro'],
    },
  ]

  await prisma.product.createMany({ data: products })
  console.log("c'est seedé mon gaté !")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
