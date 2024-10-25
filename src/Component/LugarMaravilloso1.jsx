import LugarMaravilloso1 from '../assets/img/LugarMaravilloso1.jpg';
import PropTypes from 'prop-types';

export const LugarMaravilloso1 = ( { className } ) => {
  return (
    <img src={LugarMaravilloso1} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

LugarMaravilloso1.propTypes = {
  className: PropTypes.string
}