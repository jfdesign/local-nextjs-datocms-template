import NavLink from './NavLink'

export default function Header({data}) {
  const menu = data.allMainMenus
  
  return(
    <header>
      
      <div className="logo">Logo</div>
      
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