/* export default function Footer(){
    return (
        <footer
            className="footer"
            style={{
                background: "#232629",
                color: "#babfc4",
                padding: "12px 0",
                fontSize: "13px",
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
                textAlign: "center",
                zIndex: 100
            }}
        >
            &copy; {new Date().getFullYear()} Aryan College, All rights reserved
        </footer>
    );
} */

    import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-gray-50 py-4 px-6 border-t border-gray-200">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Aryan College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;