import Header from './Header';

const Layout = ({ children,navigationItems  }) => {
  return (
    <>
      <Header navigationItems={navigationItems} />
      {children}
    </>
  );
};

export default Layout;