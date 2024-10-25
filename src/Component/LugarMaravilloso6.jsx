import LugarMaravilloso6 from '../assets/img/LugarMaravilloso6.jpg';
import PropTypes from 'prop-types';

export const LugarMaravilloso6 = ( { className } ) => {
  return (
    <img src={LugarMaravilloso6} alt="Paisaje de Conveñas, Sucre" className={className} />
  )
}

LugarMaravilloso6.propTypes = {
  className: PropTypes.string
}