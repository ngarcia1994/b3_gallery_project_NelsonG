import LugarMaravilloso5 from '../assets/img/LugarMaravilloso5.jpg';
import PropTypes from 'prop-types';

export const LugarMaravilloso5= ( { className } ) => {
  return (
    <img src={LugarMaravilloso5} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

LugarMaravilloso5.propTypes = {
  className: PropTypes.string
}