import LugarMaravilloso2 from '../assets/img/LugarMaravilloso2.jpg';
import PropTypes from 'prop-types';

export const LugarMaravilloso2 = ( { className } ) => {
  return (
    <img src={LugarMaravilloso2} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

LugarMaravilloso2.propTypes = {
  className: PropTypes.string
}