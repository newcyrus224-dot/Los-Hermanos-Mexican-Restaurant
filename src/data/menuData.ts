export interface MenuItem {
  id: string;
  name: string;
  spanishName?: string;
  category: MenuCategory;
  price: number;
  description: string;
  isFavorite?: boolean;
  isSpicy?: boolean;
  image?: string;
  menuPage: 1 | 2 | 3 | 4;
  options?: {
    name: string;
    choices: { label: string; priceDelta?: number }[];
  }[];
  portionNote?: string;
}

export type MenuCategory =
  | 'specials'
  | 'starters'
  | 'tacos'
  | 'fajitas'
  | 'platillos'
  | 'seafood'
  | 'burritos_burgers'
  | 'nachos_salads'
  | 'kids'
  | 'alacarte_sides';

export interface CategoryInfo {
  id: MenuCategory;
  label: string;
  subtitle: string;
  description?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'specials', label: 'Lunch & Daily Combos', subtitle: 'Dishes #1 - #12' },
  { id: 'starters', label: 'Starters & Dips', subtitle: 'Queso, Guacamole, Fries' },
  { id: 'tacos', label: 'Tacos & Quesabirrias', subtitle: 'Street Tacos, Birria & Quesadillas' },
  { id: 'fajitas', label: 'Sizzling Fajitas', subtitle: 'Served with rice, beans, tortillas' },
  { id: 'platillos', label: 'Platillos Mexicanos & Ribeyes', subtitle: 'Traditional specialties & steaks' },
  { id: 'seafood', label: 'De La Costa', subtitle: 'Fresh seafood & Camarones' },
  { id: 'burritos_burgers', label: 'Burritos & Burgers', subtitle: 'California, Birria & Mexican burgers' },
  { id: 'nachos_salads', label: 'Nachos & Salads', subtitle: 'Loaded nachos & taco bowls' },
  { id: 'kids', label: 'Kids Menu', subtitle: 'Portions with fries or rice & beans' },
  { id: 'alacarte_sides', label: 'A La Carte & Sides', subtitle: 'Add-ons & single items' },
];

export interface MenuPageInfo {
  page: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  description: string;
}

export const MENU_PAGES: MenuPageInfo[] = [
  {
    page: 1,
    title: 'Printed Menu Page 1: Daily Specials #1 - #12',
    subtitle: 'Fajita Combos, Chimichangas, Chilaquiles & Gorditas',
    description: 'Verbatim transcription of the 12 numbered daily combination plates and breakfast specialties with rice and beans.',
  },
  {
    page: 2,
    title: 'Printed Menu Page 2: De La Costa & Chicken Breast',
    subtitle: 'Seafood, Pollo Specialties, Taco Salads & Baked Potatoes',
    description: 'Fresh Gulf shrimp, fish tacos, steamed fish, house cream chicken dishes, and loaded seasoned potatoes.',
  },
  {
    page: 3,
    title: 'Printed Menu Page 3: Tacos, Birria, Burritos & Steaks',
    subtitle: 'Quesabirrias, Street Tacos, Michoacán Carnitas & 12oz Ribeyes',
    description: 'Slow-braised birria, crispy quesabirrias with rich dipping consomé, traditional platillos, and charbroiled steaks.',
  },
  {
    page: 4,
    title: 'Printed Menu Page 4: Starters, Fajitas, Nachos & A La Carte',
    subtitle: 'Queso Dip, Sizzling Fajitas, Kids Meals & Single Items',
    description: 'Signature dips, loaded fries, sizzling iron skillets, kids favorites, and single a la carte tacos and enchiladas.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- Page 1: Specials (#1 to #12) ---
  {
    id: 'special-1',
    name: '#1. Chicken or Steak Fajitas',
    category: 'specials',
    price: 11.21,
    menuPage: 1,
    description: 'Served with Mexican rice and refried beans. Includes three warm flour tortillas.',
    isFavorite: true,
    options: [
      {
        name: 'Protein Choice',
        choices: [{ label: 'Chicken' }, { label: 'Steak' }],
      },
      {
        name: 'Tortillas',
        choices: [{ label: 'Flour Tortillas (3)' }, { label: 'Corn Tortillas (3)' }],
      },
    ],
  },
  {
    id: 'special-2',
    name: '#2. Chimichanga',
    category: 'specials',
    price: 9.51,
    menuPage: 1,
    description: 'Deep fried beef, steak, or chicken taquito or fajita served with rice and beans.',
    options: [
      {
        name: 'Meat Filling',
        choices: [{ label: 'Ground Beef' }, { label: 'Chicken' }, { label: 'Steak (+$1.00)', priceDelta: 1.0 }],
      },
    ],
  },
  {
    id: 'special-3',
    name: '#3. Chile Relleno Plate',
    category: 'specials',
    price: 9.51,
    menuPage: 1,
    description: 'One chile relleno filled with ground beef topped with warm queso cheese dip. Served with rice and beans.',
  },
  {
    id: 'special-4',
    name: '#4. Los Hermanos Omelette',
    category: 'specials',
    price: 9.51,
    menuPage: 1,
    description: 'Egg omelette stuffed with cheese, grilled onions, tomatoes, bell peppers and mushrooms, served with beans.',
    isFavorite: true,
  },
  {
    id: 'special-5',
    name: '#5. Huevos con Chorizo',
    category: 'specials',
    price: 9.51,
    menuPage: 1,
    description: 'Scrambled eggs with Mexican chorizo sausage, served with rice and beans.',
  },
  {
    id: 'special-6',
    name: '#6. Chilaquiles',
    category: 'specials',
    price: 9.51,
    menuPage: 1,
    description: 'Crispy tortilla chips cooked with salsa verde or salsa roja, topped with shredded cheese and two sunny-up eggs.',
    options: [
      {
        name: 'Salsa',
        choices: [{ label: 'Salsa Verde (Tangy Tomatillo)' }, { label: 'Salsa Roja (Rich Red Sauce)' }],
      },
    ],
  },
  {
    id: 'special-7',
    name: '#7. Tacos al Vapor',
    category: 'specials',
    price: 9.51,
    menuPage: 1,
    description: 'Three steamed authentic street tacos (choice of gourd, potato, beans, or seasoned beef).',
    isFavorite: true,
  },
  {
    id: 'special-8',
    name: '#8. Enchilada Plate',
    category: 'specials',
    price: 8.51,
    menuPage: 1,
    description: 'Two shredded chicken enchiladas topped with signature cheese dip. Served with rice and beans.',
  },
  {
    id: 'special-9',
    name: '#9. Steak Ranchero',
    category: 'specials',
    price: 10.51,
    menuPage: 1,
    description: 'Tender skirt steak topped with a fresh egg and ranchero salsa. Served with rice and beans.',
  },
  {
    id: 'special-10',
    name: '#10. Burrito Lonchero',
    category: 'specials',
    price: 8.51,
    menuPage: 1,
    description: 'Savory ham and eggs with melted cheese, onions, tomatoes, and bell peppers. Served with rice and beans.',
  },
  {
    id: 'special-11',
    name: '#11. Gorditas de Picañitas',
    category: 'specials',
    price: 8.91,
    menuPage: 1,
    description: 'Two handcrafted thick corn gorditas stuffed with tender picañita meat and savory seasonings.',
    isFavorite: true,
  },
  {
    id: 'special-12',
    name: '#12. Flautas Combo',
    category: 'specials',
    price: 8.51,
    menuPage: 1,
    description: 'Three rolled shredded chicken taquitos topped with crisp lettuce, fresh tomato, shredded cheese, and cool sour cream.',
  },

  // --- Page 2: De La Costa (Seafood) ---
  {
    id: 'seafood-1',
    name: 'Shrimp Cocktail (Cóctel de Camarón)',
    category: 'seafood',
    price: 13.99,
    menuPage: 2,
    description: 'Boiled chilled shrimp flavored in a rich seasoned broth served with fresh pico de gallo, cilantro, and ripe avocado.',
    isFavorite: true,
  },
  {
    id: 'seafood-2',
    name: 'Camarones Hermanos',
    category: 'seafood',
    price: 13.99,
    menuPage: 2,
    description: 'Succulent shrimp cooked in our secret Mexican house sauce, served with lettuce, pico de gallo, guacamole, rice and beans.',
    isFavorite: true,
  },
  {
    id: 'seafood-3',
    name: 'Camarones al Ajo',
    category: 'seafood',
    price: 14.50,
    menuPage: 2,
    description: 'Plump shrimp sautéed with garlic, caramelized onions, and mushrooms. Served with Mexican rice and beans.',
  },
  {
    id: 'seafood-4',
    name: 'Fish Tacos',
    category: 'seafood',
    price: 12.50,
    menuPage: 2,
    description: 'Three seasoned fish tacos topped with shredded crisp cabbage, pico de gallo, fresh avocado, and Los Hermanos signature sauce.',
    isFavorite: true,
  },
  {
    id: 'seafood-5',
    name: 'House Platter',
    category: 'seafood',
    price: 14.50,
    menuPage: 2,
    description: 'Four grilled jumbo shrimp wrapped in savory bacon, paired with grilled marinated chicken breast and seasoned skirt steak.',
    isFavorite: true,
  },
  {
    id: 'seafood-6',
    name: 'Pescado al Vapor',
    category: 'seafood',
    price: 17.00,
    menuPage: 2,
    description: 'Delicately steamed fish with tender shrimp, sautéed mushrooms, and bell pepper medley. Served with rice and fries.',
  },

  // --- Page 2: Chicken Breast Specialties ---
  {
    id: 'pollo-1',
    name: 'Pollo Mexicano',
    category: 'platillos',
    price: 12.99,
    menuPage: 2,
    description: 'Grilled chicken breast cooked with sautéed bell peppers, onions, tomatoes, and smothered with creamy cheese sauce.',
  },
  {
    id: 'pollo-2',
    name: 'Pollo con Mole',
    category: 'platillos',
    price: 12.99,
    menuPage: 2,
    description: 'Grilled chicken breast topped with traditional artisanal mole sauce. Served with rice, beans, and warm corn tortillas.',
    isFavorite: true,
  },
  {
    id: 'pollo-3',
    name: 'Pollo Los Hermanos',
    category: 'platillos',
    price: 13.50,
    menuPage: 2,
    description: 'Grilled chicken breast topped with rich melted cheese sauce and four grilled shrimp. Served with rice and beans.',
    isFavorite: true,
  },
  {
    id: 'pollo-4',
    name: 'Pollo en Crema',
    category: 'platillos',
    price: 12.50,
    menuPage: 2,
    description: 'Grilled chicken breast simmered in our house cream sauce, with grilled onions and sweet bell peppers. Served with rice and beans.',
  },

  // --- Page 2: Salads, Baked Potato & Veggies ---
  {
    id: 'salad-1',
    name: 'Taco Salad',
    category: 'nachos_salads',
    price: 12.99,
    menuPage: 2,
    description: 'Crisp tortilla bowl served with lettuce, shredded cheese, beans, diced tomatoes, sour cream, and homemade guacamole.',
    options: [
      {
        name: 'Protein Choice',
        choices: [
          { label: 'Ground Beef ($11.99)', priceDelta: -1.0 },
          { label: 'Grilled Chicken ($12.99)', priceDelta: 0 },
          { label: 'Steak ($12.99)', priceDelta: 0 },
          { label: 'Pastor ($12.99)', priceDelta: 0 },
          { label: 'Shrimp Injected ($14.50)', priceDelta: 1.51 },
        ],
      },
    ],
  },
  {
    id: 'potato-1',
    name: 'Loaded Baked Potato',
    category: 'nachos_salads',
    price: 14.50,
    menuPage: 2,
    description: 'A large roasted baked potato generously topped with melted cheese, cool sour cream, and your choice of seasoned meat.',
    options: [
      {
        name: 'Meat Choice',
        choices: [
          { label: 'Ground Beef ($12.99)', priceDelta: -1.51 },
          { label: 'Grilled Chicken ($14.50)', priceDelta: 0 },
          { label: 'Steak ($14.50)', priceDelta: 0 },
          { label: 'Pastor ($14.50)', priceDelta: 0 },
          { label: 'Shrimp Injected ($15.25)', priceDelta: 0.75 },
        ],
      },
    ],
  },
  {
    id: 'veggie-plate',
    name: 'Veggie Plate Special',
    category: 'platillos',
    price: 13.99,
    menuPage: 2,
    description: 'Made to order with fluffy Mexican rice and grilled seasoned seasonal vegetables, topped with choice of protein.',
    options: [
      {
        name: 'Protein Topping',
        choices: [
          { label: 'Ground Beef ($11.99)', priceDelta: -2.0 },
          { label: 'Grilled Chicken ($13.99)', priceDelta: 0 },
          { label: 'Steak ($13.99)', priceDelta: 0 },
          { label: 'Pastor ($13.99)', priceDelta: 0 },
          { label: 'Shrimp Injected ($14.50)', priceDelta: 0.51 },
        ],
      },
    ],
  },

  // --- Page 3: Burritos & Burgers ---
  {
    id: 'burrito-california',
    name: 'Burrito California',
    category: 'burritos_burgers',
    price: 12.50,
    menuPage: 3,
    description: 'Steak and grilled chicken stuffed with rice, refried beans, cheese dip, salsa, and fresh pico de gallo.',
    isFavorite: true,
  },
  {
    id: 'burrito-birria',
    name: 'Burri Birria',
    category: 'burritos_burgers',
    price: 12.99,
    menuPage: 3,
    description: 'Three mini slow-braised birria burritos stuffed with melted cheese, chopped onions, and fresh cilantro with dipping consome.',
    isFavorite: true,
  },
  {
    id: 'burrito-mexicano',
    name: 'Burrito Mexicano',
    category: 'burritos_burgers',
    price: 14.99,
    menuPage: 3,
    description: 'Steak and pastor (or your choice of meat) with rice, beans, cheese, and grilled onions, blanketed in warm queso cheese dip.',
    isFavorite: true,
  },
  {
    id: 'burger-cheese',
    name: 'Los Hermanos Cheeseburger',
    category: 'burritos_burgers',
    price: 12.00,
    menuPage: 3,
    description: 'Juicy beef burger with melted cheese, crisp lettuce, tomato, onions, mayonnaise, and a side of seasoned French fries.',
  },
  {
    id: 'burger-birria',
    name: 'Birria Burger',
    category: 'burritos_burgers',
    price: 15.00,
    menuPage: 3,
    description: 'Craft burger patty topped with savory tender beef birria, melted cheese, lettuce, tomato, and seasoned fries.',
    isFavorite: true,
  },
  {
    id: 'burger-hawaiian',
    name: 'Hawaiian Burger',
    category: 'burritos_burgers',
    price: 13.99,
    menuPage: 3,
    description: 'Grilled beef patty topped with sweet caramelized pineapple, spicy jalapeños, crispy bacon, cheese, lettuce, tomato, and fries.',
  },

  // --- Page 3: Tacos & Quesadillas ---
  {
    id: 'tacos-street',
    name: 'Three Street Tacos',
    category: 'tacos',
    price: 12.50,
    menuPage: 3,
    description: 'Warm corn tortillas with your choice of meat, topped with freshly chopped onions and cilantro. Served with rice and beans.',
    options: [
      {
        name: 'Meat Choice',
        choices: [{ label: 'Steak (Asada)' }, { label: 'Al Pastor' }, { label: 'Pollo (Chicken)' }, { label: 'Carnitas' }],
      },
    ],
  },
  {
    id: 'tacos-fiesta',
    name: 'Fiesta Tacos (Trio)',
    category: 'tacos',
    price: 14.50,
    menuPage: 3,
    description: 'Trio combination of three tacos (one steak, one pastor, one chicken) topped with shredded cheese and fresh pico de gallo. Served with rice and beans.',
  },
  {
    id: 'tacos-sinach',
    name: 'Sinach Tacos',
    category: 'tacos',
    price: 14.50,
    menuPage: 3,
    description: 'Three soft tortillas stuffed with grilled seasoned shrimp, sautéed spinach, shredded cheese, and cilantro.',
    isFavorite: true,
  },
  {
    id: 'quesabirrias',
    name: 'Quesabirrias con Consomé',
    category: 'tacos',
    price: 14.00,
    menuPage: 3,
    description: 'Three grilled corn tortillas folded with tender shredded beef birria and melted Oaxaca cheese. Served with savory dipping consomé, cilantro, and onions on the side.',
    isFavorite: true,
  },
  {
    id: 'quesadilla',
    name: 'Quesadilla Grande',
    category: 'tacos',
    price: 11.99,
    menuPage: 3,
    description: 'Flour tortilla toasted with melted cheese and choice of pastor, ground beef, chicken, or steak. Served with cool sour cream and guacamole.',
    options: [
      {
        name: 'Filling',
        choices: [{ label: 'Chicken' }, { label: 'Steak' }, { label: 'Al Pastor' }, { label: 'Ground Beef' }],
      },
    ],
  },

  // --- Page 3: Platillos Mexicanos ---
  {
    id: 'platillo-flautas',
    name: 'Flautas Mexicanas (4)',
    category: 'platillos',
    price: 12.50,
    menuPage: 3,
    description: 'Four crispy fried corn tortillas filled with seasoned chicken or shredded beef. Served with crisp lettuce, cheese, and sour cream.',
    options: [
      {
        name: 'Filling',
        choices: [{ label: 'Shredded Chicken' }, { label: 'Shredded Beef' }],
      },
    ],
  },
  {
    id: 'platillo-enchiladas-verdes',
    name: 'Enchiladas Verdes',
    category: 'platillos',
    price: 12.50,
    menuPage: 3,
    description: 'Three corn tortillas rolled with chicken or beef, smothered in tangy tomatillo green salsa and melted cheese. Served with rice and beans.',
  },
  {
    id: 'platillo-enchiladas-rancheras',
    name: 'Enchiladas Rancheras',
    category: 'platillos',
    price: 12.50,
    menuPage: 3,
    description: 'Three enchiladas (one chicken, one beef, one cheese) topped with savory ranchera sauce and queso cheese dip. Served with rice and beans.',
  },
  {
    id: 'platillo-enchiladas-mole',
    name: 'Enchiladas con Mole',
    category: 'platillos',
    price: 12.50,
    menuPage: 3,
    description: 'Three corn tortillas stuffed with shredded chicken, topped with rich homemade Puebla-style mole sauce and shredded cheese. Served with rice and beans.',
  },
  {
    id: 'platillo-sopes',
    name: 'Sopes Tradicionales',
    category: 'platillos',
    price: 10.50,
    menuPage: 3,
    description: 'Three thick fried handcrafted masa bases pinched around the rim, topped with refried beans, lettuce, cheese, sour cream, and choice of meat.',
    isFavorite: true,
  },
  {
    id: 'platillo-chiles-rellenos',
    name: 'Chiles Rellenos (Two Poblano)',
    category: 'platillos',
    price: 13.50,
    menuPage: 3,
    description: 'Two poblano peppers stuffed with ground beef or melted cheese, topped with salsa ranchera and cheese dip. Served with rice and beans.',
    options: [
      {
        name: 'Filling',
        choices: [{ label: 'Ground Beef' }, { label: 'Cheese' }, { label: 'One Beef & One Cheese' }],
      },
    ],
  },
  {
    id: 'platillo-tamale-plate',
    name: 'Tamale Plate',
    category: 'platillos',
    price: 11.50,
    menuPage: 3,
    description: 'Three homemade pork tamales covered with red enchilada sauce or green tomatillo salsa, served with rice and beans.',
    options: [
      {
        name: 'Sauce',
        choices: [{ label: 'Red Enchilada Sauce' }, { label: 'Green Tomatillo Salsa' }],
      },
    ],
  },
  {
    id: 'platillo-carnitas',
    name: 'Carnitas Michoacán Style',
    category: 'platillos',
    price: 13.99,
    menuPage: 3,
    description: 'Tender pork tips slow cooked to golden perfection, served with rice, beans, jalapeño, and fresh pico de gallo.',
    isFavorite: true,
  },
  {
    id: 'platillo-steak-mexicano',
    name: 'Steak Mexicano',
    category: 'platillos',
    price: 15.99,
    menuPage: 3,
    description: 'Juicy steak strips sautéed with caramelized onions, ripe tomatoes, and bell peppers. Served with rice, beans, and warm tortillas.',
  },
  {
    id: 'platillo-carne-asada',
    name: 'Carne Asada Platter',
    category: 'platillos',
    price: 15.99,
    menuPage: 3,
    description: 'Tender skirt steak grilled to order, served with grilled cambray onions, seasoned rice, refried beans, and warm tortillas.',
    isFavorite: true,
  },
  {
    id: 'platillo-el-rayo',
    name: 'El Rayo Platter',
    category: 'platillos',
    price: 15.99,
    menuPage: 3,
    description: 'Grilled chicken and skirt steak tossed with crisp bacon, onions, bell peppers, and drizzled with creamy cheese sauce. Served with rice and beans.',
    isFavorite: true,
  },

  // --- Page 3: Ribeye Steaks ---
  {
    id: 'ribeye-ranchero',
    name: '12oz Ribeye Ranchero',
    category: 'platillos',
    price: 20.99,
    menuPage: 3,
    description: 'A 12oz prime cut ribeye steak seared and topped with grilled onions, tomatoes, and fresh jalapeños. Served with rice, beans, and tortillas.',
  },
  {
    id: 'ribeye-louisiana',
    name: '12oz Ribeye Louisiana',
    category: 'platillos',
    price: 24.99,
    menuPage: 3,
    description: 'A 12oz ribeye cooked to perfection and topped with grilled shrimp, sautéed mushrooms, and creamy queso dip. Served with rice and seasoned French fries.',
    isFavorite: true,
  },

  // --- Page 4: Starters ---
  {
    id: 'starter-queso',
    name: 'Signature Queso Dip',
    category: 'starters',
    price: 4.99,
    menuPage: 4,
    description: 'Our legendary warm melted Mexican cheese dip served with fresh crispy tortilla chips.',
    isFavorite: true,
  },
  {
    id: 'starter-guac',
    name: 'Guacamole Dip',
    category: 'starters',
    price: 4.75,
    menuPage: 4,
    description: 'Freshly smashed avocados with lime juice, cilantro, jalapeño, and tomato, served with chips.',
    isFavorite: true,
  },
  {
    id: 'starter-frijoles-frescos',
    name: 'Frijoles Frescos Dip',
    category: 'starters',
    price: 5.50,
    menuPage: 4,
    description: 'Rich refried bean dip blended with melted queso and mild jalapeño spices.',
  },
  {
    id: 'starter-wings',
    name: '8 Wings (Buffalo, BBQ, Mango Habanero)',
    category: 'starters',
    price: 11.99,
    menuPage: 4,
    description: 'Eight crispy bone-in chicken wings tossed in your choice of Buffalo, smoky BBQ, or sweet & fiery Mango Habanero.',
    options: [
      {
        name: 'Wing Flavor',
        choices: [{ label: 'Buffalo' }, { label: 'Smoky BBQ' }, { label: 'Mango Habanero' }],
      },
    ],
  },
  {
    id: 'starter-3amigos-fries',
    name: '3 Amigos Fries',
    category: 'starters',
    price: 14.50,
    menuPage: 4,
    description: 'Seasoned French fries piled high with grilled steak, crispy bacon, and smothered in signature queso dip.',
    isFavorite: true,
  },
  {
    id: 'starter-buffalo-fries',
    name: 'Buffalo Fries',
    category: 'starters',
    price: 12.99,
    menuPage: 4,
    description: 'Crispy seasoned fries topped with spicy buffalo chicken bites, cool buttermilk ranch, and warm melted queso.',
  },
  {
    id: 'starter-beef-cheese-nachos',
    name: 'Ground Beef & Cheese Nachos',
    category: 'starters',
    price: 9.99,
    menuPage: 4,
    description: 'Crisp tortilla chips blanketed in seasoned ground beef and warm golden melted cheese sauce.',
  },

  // --- Page 4: Fajitas ---
  {
    id: 'fajitas-steak-chicken',
    name: 'Steak or Chicken Fajitas',
    category: 'fajitas',
    price: 13.99,
    menuPage: 4,
    description: 'Cooked with sizzling onions, tomatoes, and bell peppers. Served with lettuce, pico de gallo, sour cream, guacamole, rice, beans, and warm tortillas.',
    isFavorite: true,
    options: [
      {
        name: 'Protein',
        choices: [{ label: 'Grilled Chicken' }, { label: 'Grilled Skirt Steak' }],
      },
      {
        name: 'Tortillas',
        choices: [{ label: 'Flour Tortillas' }, { label: 'Corn Tortillas' }],
      },
    ],
  },
  {
    id: 'fajitas-shrimp',
    name: 'Shrimp Fajitas',
    category: 'fajitas',
    price: 14.99,
    menuPage: 4,
    description: 'Plump sautéed shrimp with bell peppers, onions, and tomatoes on a smoking skillet with all fajita trimmings.',
  },
  {
    id: 'fajitas-trio',
    name: 'Fajita Trio',
    category: 'fajitas',
    price: 17.50,
    menuPage: 4,
    description: 'The ultimate sizzling combination of tender steak, marinated chicken, and succulent shrimp with grilled vegetables.',
    isFavorite: true,
  },
  {
    id: 'fajitas-asada',
    name: 'Fajita de Asada',
    category: 'fajitas',
    price: 15.99,
    menuPage: 4,
    description: 'Tender grilled skirt steak cooked with sweet peppers and onions, served with full trimmings.',
  },
  {
    id: 'fajitas-3amigos',
    name: 'Fajita 3 Amigos (Grand Platter)',
    category: 'fajitas',
    price: 17.99,
    menuPage: 4,
    description: 'Our most generous platter: grilled skirt steak, chicken, jumbo shrimp, spicy Mexican chorizo, and tender carnitas on a sizzling iron pan.',
    isFavorite: true,
  },

  // --- Page 4: Nachos ---
  {
    id: 'nachos-fajita',
    name: 'Steak or Chicken Fajita Nachos',
    category: 'nachos_salads',
    price: 12.99,
    menuPage: 4,
    description: 'Crispy chips layered with grilled onions, bell peppers, tomatoes, and melted cheese sauce with your choice of meat.',
    options: [
      {
        name: 'Meat',
        choices: [{ label: 'Grilled Chicken' }, { label: 'Grilled Steak' }],
      },
    ],
  },
  {
    id: 'nachos-mar-tierra',
    name: 'Mar y Tierra Nachos (Surf & Turf)',
    category: 'nachos_salads',
    price: 15.50,
    menuPage: 4,
    description: 'Loaded chips with grilled skirt steak, tender chicken, and shrimp, bathed in cheese sauce, grilled peppers, and onions.',
    isFavorite: true,
  },
  {
    id: 'nachos-loaded',
    name: 'Loaded Nachos',
    category: 'nachos_salads',
    price: 12.50,
    menuPage: 4,
    description: 'Topped with seasoned ground beef, refried beans, crisp lettuce, ripe tomatoes, cool sour cream, and spicy pickled jalapeños.',
  },

  // --- Page 4: Kids Menu ---
  {
    id: 'kid-nuggets',
    name: 'Kid Nuggets and Fries',
    category: 'kids',
    price: 5.99,
    menuPage: 4,
    description: 'Crispy golden chicken nuggets served with hot seasoned French fries.',
  },
  {
    id: 'kid-quesadilla',
    name: 'Kid Cheese Quesadilla w/ Rice & Beans',
    category: 'kids',
    price: 6.50,
    menuPage: 4,
    description: 'Folded warm flour tortilla with melted mild cheese, served with rice and refried beans.',
  },
  {
    id: 'kid-birria-pizza',
    name: 'Kid Mini Birria Pizza w/ Fries',
    category: 'kids',
    price: 7.99,
    menuPage: 4,
    description: 'Mini tortilla crust with shredded birria beef and melted cheese, toasted crispy and served with French fries.',
    isFavorite: true,
  },
  {
    id: 'kid-burrito',
    name: 'Kid Burrito w/ Rice & Beans',
    category: 'kids',
    price: 6.50,
    menuPage: 4,
    description: 'Flour tortilla rolled with mild seasoned ground beef, accompanied by rice and refried beans.',
  },
  {
    id: 'kid-corndog',
    name: 'Kid Corn Dog w/ Fries',
    category: 'kids',
    price: 5.99,
    menuPage: 4,
    description: 'Classic batter-dipped hot dog on a stick with seasoned French fries.',
  },

  // --- Page 4: A La Carte & Sides ---
  {
    id: 'alacarte-chile-relleno',
    name: 'A La Carte Chile Relleno',
    category: 'alacarte_sides',
    price: 3.99,
    menuPage: 4,
    description: 'Single roasted poblano pepper filled with cheese or ground beef, topped with sauce.',
    options: [
      {
        name: 'Filling',
        choices: [{ label: 'Cheese' }, { label: 'Ground Beef' }],
      },
    ],
  },
  {
    id: 'alacarte-tamal',
    name: 'A La Carte Tamal',
    category: 'alacarte_sides',
    price: 2.99,
    menuPage: 4,
    description: 'Single homemade pork tamal with red sauce or green tomatillo salsa.',
  },
  {
    id: 'alacarte-chimichanga',
    name: 'A La Carte Chimichanga',
    category: 'alacarte_sides',
    price: 3.99,
    menuPage: 4,
    description: 'Crispy fried chimichanga with ground beef or chicken ($3.99), or upgrade to fajita steak/chicken ($7.99).',
    options: [
      {
        name: 'Style',
        choices: [
          { label: 'Ground Beef / Shredded Chicken ($3.99)', priceDelta: 0 },
          { label: 'Fajita Chicken ($7.99)', priceDelta: 4.0 },
          { label: 'Fajita Steak ($7.99)', priceDelta: 4.0 },
        ],
      },
    ],
  },
  {
    id: 'alacarte-burrito',
    name: 'A La Carte Burrito',
    category: 'alacarte_sides',
    price: 4.99,
    menuPage: 4,
    description: 'Single burrito rolled with ground beef or shredded chicken ($4.99), or grilled steak/carnitas ($7.50).',
    options: [
      {
        name: 'Meat',
        choices: [
          { label: 'Ground Beef ($4.99)', priceDelta: 0 },
          { label: 'Shredded Chicken ($4.99)', priceDelta: 0 },
          { label: 'Grilled Steak ($7.50)', priceDelta: 2.51 },
          { label: 'Carnitas ($7.50)', priceDelta: 2.51 },
        ],
      },
    ],
  },
  {
    id: 'alacarte-enchilada',
    name: 'A La Carte Enchilada',
    category: 'alacarte_sides',
    price: 1.99,
    menuPage: 4,
    description: 'Single rolled enchilada with ground beef or chicken ($1.99), or steak/grilled chicken ($2.50).',
    options: [
      {
        name: 'Meat',
        choices: [
          { label: 'Ground Beef ($1.99)', priceDelta: 0 },
          { label: 'Shredded Chicken ($1.99)', priceDelta: 0 },
          { label: 'Steak ($2.50)', priceDelta: 0.51 },
          { label: 'Grilled Chicken ($2.50)', priceDelta: 0.51 },
        ],
      },
    ],
  },
  {
    id: 'alacarte-taco',
    name: 'A La Carte Taco (Soft or Crispy)',
    category: 'alacarte_sides',
    price: 1.99,
    menuPage: 4,
    description: 'Single taco with beef or chicken ($1.99), or steak/grilled chicken/carnitas ($2.50).',
    options: [
      {
        name: 'Shell',
        choices: [{ label: 'Crispy Corn Shell' }, { label: 'Soft Flour Tortilla' }],
      },
      {
        name: 'Meat',
        choices: [
          { label: 'Ground Beef ($1.99)', priceDelta: 0 },
          { label: 'Shredded Chicken ($1.99)', priceDelta: 0 },
          { label: 'Steak ($2.50)', priceDelta: 0.51 },
          { label: 'Grilled Chicken ($2.50)', priceDelta: 0.51 },
          { label: 'Carnitas ($2.50)', priceDelta: 0.51 },
        ],
      },
    ],
  },
  {
    id: 'side-rice-beans',
    name: 'Rice & Refried Beans',
    category: 'alacarte_sides',
    price: 3.99,
    menuPage: 4,
    description: 'Classic side plate of Mexican rice and seasoned refried beans.',
  },
  {
    id: 'side-rice-or-beans',
    name: 'Rice or Beans (Single)',
    category: 'alacarte_sides',
    price: 2.50,
    menuPage: 4,
    description: 'Side portion of either Mexican rice or seasoned beans.',
    options: [
      {
        name: 'Selection',
        choices: [{ label: 'Mexican Rice' }, { label: 'Refried Beans' }],
      },
    ],
  },
  {
    id: 'side-tortillas',
    name: 'Tortillas (3)',
    category: 'alacarte_sides',
    price: 1.50,
    menuPage: 4,
    description: 'Three freshly warmed tortillas, flour or corn.',
    options: [
      {
        name: 'Type',
        choices: [{ label: 'Warm Flour Tortillas' }, { label: 'Warm Corn Tortillas' }],
      },
    ],
  },
  {
    id: 'side-fries',
    name: 'French Fries',
    category: 'alacarte_sides',
    price: 2.99,
    menuPage: 4,
    description: 'Crispy seasoned potato French fries.',
  },
  {
    id: 'side-pico',
    name: 'Pico de Gallo',
    category: 'alacarte_sides',
    price: 0.99,
    menuPage: 4,
    description: 'Freshly diced tomatoes, onions, cilantro, and jalapeños in lime juice.',
  },
  {
    id: 'side-jalapenos',
    name: 'Jalapeño Pepper',
    category: 'alacarte_sides',
    price: 1.00,
    menuPage: 4,
    description: 'Side of fresh or pickled jalapeño peppers.',
  },
  {
    id: 'side-sour-cream',
    name: 'Sour Cream (Crema)',
    category: 'alacarte_sides',
    price: 1.00,
    menuPage: 4,
    description: 'Cool Mexican sour cream.',
  },
  {
    id: 'side-cheese',
    name: 'Shredded Cheese',
    category: 'alacarte_sides',
    price: 1.50,
    menuPage: 4,
    description: 'Extra portion of shredded melted cheese blend.',
  },
];

export const RESTAURANT_INFO = {
  name: 'Los Hermanos',
  tagline: 'Authentic Mexican Cocina & Birria House',
  address: '1315 1st Ave, Kinder, LA 70648',
  street: '1315 1st Ave',
  city: 'Kinder',
  state: 'LA',
  zip: '70648',
  phone: '(337) 576-9277',
  phoneRaw: '+13375769277',
  email: 'hola@loshermanoskinder.com',
  mapsUrl: 'https://maps.app.goo.gl/ZbWAv8ESRofWPmV57',
  embedMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.81561726058!2d-92.8465!3d30.4852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863adbc6a02b6be3%3A0xb35a39626372c083!2s1315%201st%20Ave%2C%20Kinder%2C%20LA%2070648!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  hours: [
    { days: 'Monday – Thursday', time: '10:30 AM – 9:00 PM' },
    { days: 'Friday – Saturday', time: '10:30 AM – 10:00 PM' },
    { days: 'Sunday', time: '11:00 AM – 8:30 PM' },
  ],
  about: 'Los Hermanos brings authentic Mexican cocina, slow-braised birria, sizzling cast-iron fajitas, fresh coastal seafood, and scratch-made salsas to 1315 1st Ave in Kinder, Louisiana. Featuring a welcoming full dining room, open kitchen, and covered outdoor patio.',
};
