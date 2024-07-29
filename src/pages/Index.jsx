import { Link, Outlet } from 'react-router-dom';
import { navItems } from '../nav-items';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Reddit Clone</h1>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center">
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 Reddit Clone. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
