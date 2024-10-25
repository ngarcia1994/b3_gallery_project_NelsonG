import LugarMaravilloso4 from '../assets/img/LugarMaravilloso4.jpg';
import PropTypes from 'prop-types';

export const LugarMaravilloso4 = ( { className } ) => {
  return (
    <img src={LugarMaravilloso4} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

LugarMaravilloso4.propTypes = {
  className: PropTypes.string
}