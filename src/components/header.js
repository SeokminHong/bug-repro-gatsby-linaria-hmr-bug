import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "linaria"
import { styled } from "linaria/react"

const HeaderBorder = styled.header`
  background-color: rebeccapurple;
  margin-bottom: 1.45rem;
`

const Header = ({ siteTitle }) => (
  <HeaderBorder>
    <div
      className={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderBorder>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
