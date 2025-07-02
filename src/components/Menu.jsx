import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Espresso",
      description: "Rich and bold single shot of pure coffee essence",
      price: "$3.50",
      category: "Hot Coffee",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Caramel Macchiato",
      description: "Espresso with steamed milk and vanilla, topped with caramel",
      price: "$4.75",
      category: "Hot Coffee",
      image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Iced Americano",
      description: "Chilled espresso with cold water and ice",
      price: "$4.00",
      category: "Cold Coffee",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      name: "Mocha Frappuccino",
      description: "Blended coffee with chocolate and whipped cream",
      price: "$5.50",
      category: "Cold Coffee",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 5,
      name: "Chai Tea Latte",
      description: "Spiced black tea with steamed milk",
      price: "$4.25",
      category: "Tea",
      image: "https://images.unsplash.com/photo-1557006021-6d123e1f560c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 6,
      name: "Croissant",
      description: "Buttery, flaky French pastry",
      price: "$3.25",
      category: "Pastries",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <div className="menu-section" id="menu">
      <h2>Our Menu</h2>
      <p className="menu-description">Discover our carefully curated selection of coffee and treats</p>
      
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-content">
              <h3>{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <div className="menu-item-footer">
                <span className="category">{item.category}</span>
                <span className="price">{item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 