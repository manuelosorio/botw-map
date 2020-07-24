export const icons = [
  {
    name: 'Remote Bomb (Sphere)',
    location: 'Ja Baij Shrine',
    description: 'The Remote Bomb is a Rune ability ' +
      'for the Sheikah Slate found in Breath ' +
      'of the Wild. It is obtained in the Ja Baij ' +
      'Shrine while exploring the Great Plateau. ' +
      'It can be used to: gather resources, blow up ' +
      'enemies, and even open secret areas. The sphere bomb ' +
      'will roll down any slope and its trajectory is ' +
      'influenced by wind.',
    category: 'Rune',
    slug: 'remote-bomb-sphere'
  },
  {
    name: 'Remote Bomb (Cube) ',
    location: 'Ja Baij Shrine',
    description: 'The Remote Bomb is a Rune ability ' +
      'for the Sheikah Slate found in Breath ' +
      'of the Wild. It is obtained in the Ja Baij ' +
      'Shrine while exploring the Great Plateau. ' +
      'It can be used to: gather resources, blow up ' +
      'enemies, and even open secret areas. Unlike the sphere bomb, ' +
      'the square variant will not roll although, like the sphere bomb, ' +
      'it can be influenced by wind.',
    category: 'Rune',
    slug: 'remote-bomb-cube'
  },
  {
    name: 'Stasis',
    location: 'Owa Daime Shrine',
    description: 'The Stasis Rune is ability obtained ' +
      'in the Owa Daime Shrine at the Great Plateau. ' +
      'Stasis allows link to freeze objects in time for a period of time. ' +
      'Frozen Objects can be stricken with a weapon which will create kinetic ' +
      'energy that is stored in the object. Upon the stasis timer running out ' +
      'or Link releasing the object in stasis, the stored kinetic energy is applied to and object and released.' +
      'Upon upgrading the at the [Hateno Lab] Link can freeze enemies for a short period of time.',
    category: 'Rune',
    slug: 'stasis'
  },
  {
    name: 'Magnesis',
    location: '',
    description: '',
    category: 'Rune',
    slug: 'magnesis'
  },
  {
    name: 'Cryonis',
    location: '',
    description: '',
    category: 'Rune',
    slug: 'cryonis'
  },
  {
    name: 'Camera',
    location: 'Hateno Lab ',
    description: 'The Camera Rune is obtained in the Hateno Lab after completing Purah\'s quest. The camera allows link to take pictures. When taking pictures of items or enemy\'s they can be stored in the Hyrule Compendium which gives more information and tells you of common locations. They can also be targeted with with the Sheikah Sensor to let Link know when he is nearby a target. After receiving the Camera Rune the album is also unlocked which comes preset with images that can lead to Link\'s lost Memories.',
    category: 'rune',
    slug: 'camera'
  },
  {
    name: 'Hylian Shield',
    location: 'Hyrule Castle',
    description: 'Iconic shield present in most Legend of Zelda games. In breath of the wild the Hylian shield can be found in the depths of the Hyrule Castle\'s dungeon floor. The shield is obtained after defeating the Stalnox located in the castle. Unlike most games in the franchise, the shield is not a main item and can in fact be destroyed or lost. The shield can be bought after completing the Terry Town storyline.',
    category: 'item',
    slug: 'hylian-shield'
  },
  {
    name: 'Master Sword',
    location: 'Korok Forest',
    description: `The Master Sword is the legendary weapon wielded by Link with the ability to vanquish evil. In breath of the wild the master sword will have a blue glow when near the calamity (including infested enemies, when in divine beasts, and all guardians). When the blading is glowing, its strength is boosted to 60 damage. <br />Although the sword has durability, unlike other weapons it doesn\'t get destroyed. When the durability is depleted the sword has a cool down period before its usable again. <br />Additionally through the Trail of the sword DLC you are able to improve the Master Sword damage and durability. The Trial of the sword consist of 3 trials with increasing difficulty. Each trial are a series of challenge you most face, each trial also upgrading the Master sword.`,
    category: 'item',
    slug: 'master-sword'
  },
  {
    name: 'Spirit Orb',
    location: 'Shrines',
    description: 'Key item that are obtained by completing shrine trails. Upon completing the shrine, the monk located there will award link the orb. Spirit Orbs are used to upgrading health or stamina.  In total there are 120 spirit orbs in the game, allowing for 30 upgrades (Can only fully complete heart containers or stamina vessels).',
    category: 'KeyItem',
    slug: 'spirit-orb'
  },
  {
    name: 'Korok Seeds',
    location: '900 Hidden Locations',
    description: '',
    category: 'KeyItem',
    slug: 'korok-seeds'
  },
  {
    name: 'Milpha\'s Grace',
    location: 'Divine Beast Vah Ruta',
    description: '',
    category: 'KeyItem',
    slug: 'mipha-grace'
  },
  {
    name: 'Revali\'s Gale',
    location: 'Divine Beast Vah Medoh',
    description: '',
    category: 'KeyItem',
    slug: 'revali-gale'
  },
  {
    name: 'Daruk\'s Protection',
    location: 'Divine Beast Vah Rudania',
    description: '',
    category: 'KeyItem',
    slug: 'daruk-protection'
  },
  {
    name: 'Urbosa\'s Fury',
    location: 'Divine Beast Vah Naboris',
    description: '',
    category: 'KeyItem',
    slug: 'urbosa-fury'
  },
  {
    name: 'Master Torch',
    location: '',
    description: 'The legendary weapon wield by the chosen hero, at least that\'s what Yolero seems to believe.  Than again Yolero also seems to believe that the Master Sword is an off brand knock off. ',
    category: 'Item',
    slug: 'master-torch'
  }
];
export function iconsDiv() {
  for (let icon of icons) {
    let iconContainer = document.querySelector(`.icon--${icon.slug}`);
    iconContainer.innerHTML += `
      <p class="icon--name"><strong>${icon.name}</strong></p>
    `
  }
}
export function iconHover(parent) {
  $(`.${parent} .icon--name`).animate({
    'opacity': '1'
  }, 300, 'linear')
}
export function iconHoverEnd(parent) {
  $(`.${parent} .icon--name`).animate({
    'opacity': '0'
  }, 300, 'linear')
}
export function findIcon(slug) {
  return icons.find(value => value.slug === slug)
}
