import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <header>
        <h1>ManueLopez.Dev</h1>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/dsAlgo'>Ds Algo</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
