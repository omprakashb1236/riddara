import Link from 'next/link';

const Navigation = ({ navigationItems }) => {
  return (
    <nav>
      <ul>
        {navigationItems && navigationItems.map((item,index) => (
          <li key={index}>
            <Link href={`/${item.slug}`}>
             {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
