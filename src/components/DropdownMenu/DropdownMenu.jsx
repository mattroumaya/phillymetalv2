import "./DropdownMenu.scss";
import React, { useState } from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { Link } from "react-router-dom";

export default function DropdownMenu({ fliersOnClick }) {
  const [visible, setVisible] = useState(false);
  const closeMenu = () => setVisible(false);

  return (
    <div className="menu-container-wrapper">
      <div className="menu-container">
        <CDropdown
          variant="btn-group"
          direction="center"
          className="menu-dropdown"
          visible={visible}
        >
          <CDropdownToggle
            color="secondary"
            size="lg"
            onClick={() => setVisible(!visible)}
          >
            menu
          </CDropdownToggle>

          {visible && (
            <CDropdownMenu className="custom-dropdown-menu">
              <CDropdownItem
                component={Link}
                to="/"
                href="/"
                onClick={closeMenu}
              >
                home
              </CDropdownItem>
              <CDropdownItem
                component={Link}
                to="/archive"
                href="/archive"
                onClick={closeMenu}
              >
                archive
              </CDropdownItem>
              <CDropdownItem
                component={Link}
                to="/newsletter"
                href="/newsletter"
                onClick={closeMenu}
              >
                newsletter
              </CDropdownItem>
              <CDropdownItem
                component={Link}
                to="/add"
                href="/add"
                onClick={closeMenu}
              >
                add a show
              </CDropdownItem>
            </CDropdownMenu>
          )}
        </CDropdown>
      </div>
    </div>
  );
}
