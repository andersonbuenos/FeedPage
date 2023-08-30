import styles from './Sidebar.module.css';

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50' 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://media.licdn.com/dms/image/C4D03AQErUDqpwQZVOA/profile-displayphoto-shrink_800_800/0/1643648874387?e=1698883200&v=beta&t=zSjdtS6NjnaLVAbHISAHd6-ZfUFxY-xYO-yy-2sIkMg"
                />
                
                <strong>Anderson Buenos</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>               
        </aside>
    );
}