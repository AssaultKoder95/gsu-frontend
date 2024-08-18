import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/add-task">Add Task</Link>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default Layout;
