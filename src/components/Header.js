import React from 'react';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond" />
    </div>
    <div className="content">
      <div className="inner">
        <h1><a href="https://www.facebook.com/ChefPersonalAustin/">Airbnb Experience</a></h1>
        <p><a href="https://www.facebook.com/ChefPersonalAustin/photos/a.161581687331603.1073741826.154293651393740/161581707331601/?type=1&theater">Chicken Ballotine</a> rotisserie is a French classic dish<br />
                  Garnish: mash potatoes
                  dessert cream puff and strawberries with basil
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro'); }}>Concept</a></li>
        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work'); }}>Work</a></li>
        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about'); }}>About</a></li>
        <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact'); }}>Contact</a></li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
};

export default Header;
