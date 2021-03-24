import React from 'react';
import {shallow} from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en componente GifGridItem', () => {
    
    let wrapper = shallow( <GifGridItem /> );

        beforeEach( () => {

            wrapper = shallow( <GifGridItem /> );

        });

        test('Debe mostrar <GifGridItem /> correctamente', () => {

            expect(wrapper).toMatchSnapshot();

        });
    

})
