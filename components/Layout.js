import Header from './Header';

const Layout = ({ children,navigationItems  }) => {
  return (
    <div>
      <Header navigationItems={navigationItems} />
      {children}
    </div>
  );
};

export default Layout;