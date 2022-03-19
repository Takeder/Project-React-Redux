
import Catalog from '../components/Catalog';
import CatalogHooks from '../components/CatalogHooks';
import CatalogRedux from '../components/CatalogRedux';

import MenuRedux from '../components/menu-redux';
import AddMenuItemRedux from '../components/AddMenuItemRedux';

function HomePage () {
    return (
        <>
            <h1>Компонент каталога на React Redux</h1>
            <CatalogRedux />
            <h1>Компонент каталога на React Hooks</h1>
            <CatalogHooks />
            <h1>Компонент каталога на React Class</h1>
            <Catalog />
            <MenuRedux />
            <AddMenuItemRedux />
        </>
    )
}

export default HomePage;
