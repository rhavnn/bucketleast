// import { useState } from 'react'
import './NavBar.tsx';
import NavBar from './NavBar.tsx';
import ColumnWorkspace from './ColumnWorkspace.tsx';

function Dashboard() {
  return (
    <main>
      <NavBar></NavBar>
      <section className="column-workspace">
        <ColumnWorkspace></ColumnWorkspace>
      </section>
    </main>
  )
}

export default Dashboard