import './App.css';
import icono from './assets/img/chicken.png';

function Layout({ children }) {
  return (
    <div className='fondo'>
      <nav>
        <ul>
          <li><a href='/'><button>HOME</button></a></li>
          <li><a href='/rules'><button>RULES</button></a></li>
          <li><a href='/play'><button>PLAY</button></a></li>
          <li><a href='/aboutus'><button>ABOUT US</button></a></li>
          <li><a href='/rank'><button>RANK</button></a></li>
          <li><a href='/login'><button>LOGIN</button></a></li>
          <li><a href='/register'><button>REGISTER</button></a></li>
        </ul>
      </nav>
      <div className='centro'>
        {children}
      </div>
    </div>
  )
}

export default Layout;