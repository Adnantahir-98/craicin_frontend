import { useState } from "react";
import { Link } from "react-router-dom";
import {EdinburghOneDayNav,
  EdinburghTwoDayNav,
  EdinburghFiveDayNav,
  EdinburghEightDayNav,

  GlasgowOneDayNav,
  GlasgowThreeDayNav,

  InvernessThreeDayNav,
  AberdeenToursNav,
  LondonToursNav,
  ManchesterToursNav,

  EnglandLondonOneDayNav,
  EnglandLondonTwoDayNav,
  EnglandLondonFiveDayNav,

  EdinBurghOneDayNav,
  EdinBurghThreeDayNav,

  EnglandManchesterOneDayNav,
  EnglandManchesterThreeDayNavTour,
  EnglandManchesterSixDayNav,

  IrelandDublinThreeDayNav,
  IrelandDublinFourDayNav,
  IrelandDublinSevenDayNav,

  EuropeSixDaysNavTours,
  EuropeThirteenDaysNavTours
} from '../data'

import {
  Row,
  Col,
  
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import TopNavBar from "./TopNav";

import {
  GiMountains,
  GiSeaDragon,
  GiHillFort,
  GiAnglerFish,
  GiIsland,
  GiSpookyHouse,
  GiWaterfall,
  GiBathtub,
  GiCliffCrossing,
  GiAtSea,
  GiSunflower,
  GiWildfires,
} from "react-icons/gi";
import { AiOutlinePhone, AiOutlineCoffee } from "react-icons/ai";


const Menu = () => {

  const [alertShow, setAlertShow] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (

    <div>
       <style type="text/css">
        {`
        .btn-flat {
          background-color: transparent;
          color: white;
          border-left: 1px solid white;
          border-right: 1px solid white;
        }

        .btn-xxl {
          padding: 1rem 1.5rem;
          font-size: 1.5rem;
        }
        `}
      </style>
      <TopNavBar show={alertShow} setShow={setAlertShow} />

      <nav
        className={
          navbar
            ? "navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3 scrollBg"
            : "navbar fixed-top navbar-expand-lg navbar-dark p-md-2 mb-3"
        }
      >
        <div className="container">
          <Link className="navbar-brand ml-2" to="/">
            <img
              src="logo.png"
              alt="Nav_logo.png"
              className=""
              style={{ width: "150px" }}
            />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="btn btn-outline-success">Menu</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-2">
              <li className="nav-item">
                <div className="rounded-0 p-1">
                  {["down"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="flat"
                      title={` Tour Scotland `}
                      className="rounded-0 slider_dropbtn text-light px-1"
                    >
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Edinburgh `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 1 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EdinburghOneDayNav.map((menu) => (
                                    <Dropdown.Item eventKey="5" key={menu.id}>
                                        <Link to={`${menu.switch}`} className="text-dark ">
                                          {menu.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 2 - 4 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EdinburghTwoDayNav.map((mnu) => (
                                    <Dropdown.Item eventKey="5" key={mnu.id}>
                                        <Link to={`${mnu.switch}`} className="text-dark ">
                                          {mnu.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 5 - 6 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EdinburghFiveDayNav.map((list) => (
                                    <Dropdown.Item eventKey="5" key={list.id}>
                                      <Link to={`${list.switch}`} className="text-dark ">
                                        {list.item}
                                      </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 8 - 17 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EdinburghEightDayNav.map((l) => (
                                    <Dropdown.Item eventKey="5" key={l.id}>
                                      <Link to={`${l.switch}`} className="text-dark ">
                                        {l.item}
                                      </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                          </DropdownButton>
                        ))}
                      </div>

                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Glasgow `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 1 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {GlasgowOneDayNav.map((navItem) => (
                                    <Dropdown.Item eventKey="5" key={navItem.id}>
                                        <Link to={`${navItem.switch}`} className="text-dark ">
                                          {navItem.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 3 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {GlasgowThreeDayNav.map((li) => (
                                    <Dropdown.Item eventKey="5" key={li.id}>
                                        <Link to={`${li.switch}`} className="text-dark ">
                                          {li.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                          </DropdownButton>
                        ))}
                      </div>
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Inverness `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            {InvernessThreeDayNav.map((items) => (
                              <Dropdown.Item eventKey="5" key={items.id}>
                                <Link to={`${items.switch}`} className="text-dark ">
                                  {items.item}
                                </Link>
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        ))}
                      </div>
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Aberdeen `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            {AberdeenToursNav.map((item) => (
                              <Dropdown.Item eventKey="5" key={item.id}>
                                <Link to={`${item.switch}`} className="text-dark ">
                                  {item.item}
                                </Link>
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        ))}
                      </div>
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from London `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            {LondonToursNav.map((menu) => (
                              <Dropdown.Item eventKey="5" key={menu.id}>
                                <Link to={`${menu.switch}`} className="text-dark ">
                                  {menu.item}
                                </Link>
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        ))}
                      </div>
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Manchester `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            {ManchesterToursNav.map((lists) => (
                              <Dropdown.Item eventKey="5" key={lists.id}>
                                <Link to={`${lists.switch}`} className="text-dark ">
                                  {lists.item}
                                </Link>
                              </Dropdown.Item>
                            ))}
                          </DropdownButton>
                        ))}
                      </div>
                      <div>
                        <hr className="dropdown-divider" />
                      </div>
                      <Row>
                        <Col md={6}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiMountains className="h3 mb-0" />
                              <br />
                              <small>Isle of Skye</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={6}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiSeaDragon className="h3 mb-0" />
                              <br />
                              <small>Loch Ness</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={6}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiHillFort className="h3 mb-0" />
                              <br />
                              <small>HighLands</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={6}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiAnglerFish className="h3 mb-0" />
                              <br />
                              <small>Loch Lomond</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={6}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <AiOutlineCoffee className="h3 mb-0" />
                              <br />
                              <small>Outlander Tours</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={6}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiIsland className="h3 mb-0" />
                              <br />
                              <small className="me-1">Skottish Islands</small>
                            </Link>
                          </small>
                        </Col>
                      </Row>
                    </DropdownButton>
                  ))}
                </div>
              </li>

              <li className="nav-item">
                <div className="rounded-0 p-1">
                  {["down"].map((direction) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={direction}
                      id={`dropdown-button-drop-${direction}`}
                      drop={direction}
                      variant="flat"
                      title={` Tour England `}
                      className="bg-default rounded-0 px-1"
                    >
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from London `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 1 Day Tours From London `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EnglandLondonOneDayNav.map((txt) => (
                                    <Dropdown.Item eventKey="5" key={txt.id}>
                                      <Link to={`${txt.switch}`} className="text-dark ">
                                        {txt.item}
                                      </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 2 - 4 Day Tours From London `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EnglandLondonTwoDayNav.map((li) => (
                                    <Dropdown.Item eventKey="5" key={li.id}>
                                        <Link to={`${li.switch}`} className="text-dark ">
                                          {li.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 5 - 10 Day Tours From London `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EnglandLondonFiveDayNav.map((li) => (
                                    <Dropdown.Item eventKey="5" key={li.id}>
                                        <Link to={`${li.switch}`} className="text-dark ">
                                          {li.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                          </DropdownButton>
                        ))}
                      </div>
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Edinburgh `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 1 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EdinBurghOneDayNav.map((navItem) => (
                                    <Dropdown.Item eventKey="5" key={navItem.id}>
                                        <Link to={`${navItem.switch}`} className="text-dark ">
                                          {navItem.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 3 - 5 Day Tours From Edinburgh `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EdinBurghThreeDayNav.map((li) => (
                                    <Dropdown.Item eventKey="5" key={li.id}>
                                        <Link to={`${li.switch}`} className="text-dark ">
                                          {li.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                          </DropdownButton>
                        ))}
                      </div>
                      <div className="rounded-0 p-1">
                        {["end"].map((direction) => (
                          <DropdownButton
                            as={ButtonGroup}
                            key={direction}
                            id={`dropdown-button-drop-${direction}`}
                            drop={direction}
                            variant="light"
                            title={` Tours from Manchester `}
                            className="bg-default rounded-0 slider_dropbtn px-1"
                          >
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 1 Day Tours From Manchester `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EnglandManchesterOneDayNav.map((navItem) => (
                                    <Dropdown.Item eventKey="5" key={navItem.id}>
                                        <Link to={`${navItem.switch}`} className="text-dark ">
                                          {navItem.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 3 - 5 Day Tours From Manchester `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EnglandManchesterThreeDayNavTour.map((li) => (
                                    <Dropdown.Item eventKey="5" key={li.id}>
                                        <Link to={`${li.switch}`} className="text-dark ">
                                          {li.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                            <div className="rounded-0 p-1">
                              {["end"].map((direction) => (
                                <DropdownButton
                                  as={ButtonGroup}
                                  key={direction}
                                  id={`dropdown-button-drop-${direction}`}
                                  drop={direction}
                                  variant="light"
                                  title={` 6 - 10 Day Tours From Manchester `}
                                  className="bg-default rounded-0 slider_dropbtn px-1"
                                >
                                  {EnglandManchesterSixDayNav.map((li) => (
                                    <Dropdown.Item eventKey="5" key={li.id}>
                                        <Link to={`${li.switch}`} className="text-dark ">
                                          {li.item}
                                        </Link>
                                    </Dropdown.Item>
                                  ))}
                                </DropdownButton>
                              ))}
                            </div>
                          </DropdownButton>
                        ))}
                      </div>
                      <li><hr className="dropdown-divider" /></li>
                      <Row>
                        <Col md={5}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiSpookyHouse className='h3 mb-0' /><br />
                              <small>The Cotswolds</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={5}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiWaterfall className='h3 mb-0'  /><br />
                              <small>Lake District</small>
                            </Link>
                          </small>
                        </Col>
                        <Col md={5}>
                          <small>
                            <Link className="dropdown-item" to="#">
                              <GiBathtub className='h3 mb-0'  /><br />
                              <small>Bath</small>
                            </Link>
                          </small>
                        </Col>
                      </Row>
                    </DropdownButton>
                  ))}
                </div>
              </li>
              <div className="rounded-0 p-1">
                {["down"].map((direction) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="flat"
                    title={` Tour Ireland `}
                    className="bg-default rounded-0 px-1"
                  >
                    <div className="rounded-0 p-1">
                    {["end"].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` 3 Day Tours From Dublin `}
                        className="bg-default rounded-0 slider_dropbtn px-1"
                      >
                        {IrelandDublinThreeDayNav.map((navItem) => (
                          <Dropdown.Item eventKey="5" key={navItem.id}>
                            <Link to={`${navItem.switch}`} className="text-dark ">
                              {navItem.item}
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    ))}
                  </div>
                  <div className="rounded-0 p-1">
                    {["end"].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` 4 - 5 Day Tours From Dublin `}
                        className="bg-default rounded-0 slider_dropbtn px-1"
                      >
                        {IrelandDublinFourDayNav.map((li) => (
                          <Dropdown.Item eventKey="5" key={li.id}>
                            <Link to={`${li.switch}`} className="text-dark ">
                              {li.item}
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    ))}
                  </div>
                  <div className="rounded-0 p-1">
                    {["end"].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="light"
                        title={` 7 - 11 Day Tours From Dublin `}
                        className="bg-default rounded-0 slider_dropbtn px-1"
                      >
                        {IrelandDublinSevenDayNav.map((li) => (
                          <Dropdown.Item eventKey="5" key={li.id}>
                            <Link to={`${li.switch}`} className="text-dark ">
                              {li.item}
                            </Link>
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    ))}
                  </div>
                  <li><hr className="dropdown-divider" /></li>
                  <Row>
                    <Col md={6}>
                      <small>
                        <Link className="dropdown-item" to="#">
                          <GiCliffCrossing className='h3 mb-0' /><br />
                          <small className='text-wrap'>Moher Cliffs</small>
                        </Link>
                      </small>
                    </Col>
                    <Col md={6}>
                      <small>
                        <Link className="dropdown-item" to="#">
                          <GiAtSea className='h3 mb-0'  /><br />
                          <small>Dingle Peninsula</small>
                        </Link>
                      </small>
                    </Col>
                    <Col md={6}>
                      <small>
                        <Link className="dropdown-item" to="#">
                          <GiSunflower className='h3 mb-0'  /><br />
                          <small>Northern Ireland</small>
                        </Link>
                      </small>
                    </Col>
                    <Col md={6}>
                      <small>
                        <Link className="dropdown-item" to="#">
                          <GiWildfires className='h3 mb-0'  /><br />
                          <small>Wild Atlantic</small>
                        </Link>
                      </small>
                    </Col>
                  </Row>
                  </DropdownButton>
                ))}
              </div>

              {/* Europe Tours */}
              <div className="rounded-0 p-1">
                {["down"].map((direction) => (
                  <DropdownButton
                    as={ButtonGroup}
                    key={direction}
                    id={`dropdown-button-drop-${direction}`}
                    drop={direction}
                    variant="flat"
                    title={` Tour Europe `}
                    className="bg-default rounded-0 px-1"
                  >
                    <div className="rounded-0 p-1">
                      {["end"].map((direction) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="light"
                          title={` 6 Day Tours From Europe `}
                          className="bg-default rounded-0 px-1"
                        >
                          {EuropeSixDaysNavTours.map((li) => (
                            <Dropdown.Item eventKey="5" key={li.id}>
                              <Link to={`${li.switch}`} className="text-dark ">
                                {li.item}
                              </Link>
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      ))}
                    </div>
                    <div className="rounded-0 p-1">
                      {["end"].map((direction) => (
                        <DropdownButton
                          as={ButtonGroup}
                          key={direction}
                          id={`dropdown-button-drop-${direction}`}
                          drop={direction}
                          variant="light"
                          title={` 13 Day Tours From Europe `}
                          className="bg-default rounded-0 px-1"
                        >
                          {EuropeThirteenDaysNavTours.map((li) => (
                            <Dropdown.Item eventKey="5" key={li.id}>
                              <Link to={`${li.switch}`} className="text-dark ">
                                {li.item}
                              </Link>
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      ))}
                    </div>
                    <Dropdown.Item eventKey="8"></Dropdown.Item>
                  </DropdownButton>
                ))}
              </div>
            </ul>

            <ul className='navbar-nav ms-auto'>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  About
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/about">About Rabbies</Link>
                  <a className="dropdown-item" href="https://www.share.rabbies.com/">Community</a>
                  <Link className="dropdown-item" to="#">Careers</Link>
                  <Link className="dropdown-item" to="/contact">Contact Us</Link>
                </div>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to="/privatetours">Private Tours</Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href="https://wa.me/441312263133"  data-toggle="tooltip" data-placement="bottom" title="+44(0) 131 226 3133">
                  <AiOutlinePhone />
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>

    </div>
  );
};

export default Menu;
