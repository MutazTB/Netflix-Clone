import React from "react";
import { Nav } from "react-bootstrap";
export default function Navbar() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/getMovies">Favorite</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

