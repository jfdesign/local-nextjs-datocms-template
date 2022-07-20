import NavLink from './NavLink'

export default function Header({data}) {
  const menu = data.allMainMenus
  const utilities = data.allUtilityMenus
  
  return(
    <header>
      
      <div className="logo">Logo</div>
      
      <nav>
        <ul>
        {
          utilities.map((nav) => (
            <NavLink key={nav.id} item={nav} />
          ))
        }
        </ul>
      </nav>

      <nav>
        <ul>
        {
          menu.map((nav) => (
            <NavLink key={nav.id} item={nav} />
          ))
        }
        </ul>
      </nav>

    </header>
  )
}