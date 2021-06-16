import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../const/colors'

const Carousel = styled.ScrollView`
  width: 95%;
  margin-left: 10px
`;

const BloodDrop = styled.Image`
  width: 100px;
  height: 100px;
  z-index: 20;
`;

const BloodDropContainer = styled.View`
  align-items: center
`;

const BloodType = styled.Text`
  color: ${colors.red}
  font-family: Rajdhani;
  font-size: 20px;
`;

const BloodDropsCarousel = () => {
  return (
    <Carousel
     horizontal= {true} 
    >
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          A RH+
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          B RH+
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          AB RH+
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          0 RH+
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          A RH-
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          B RH-
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          AB RH-
        </BloodType>
      </BloodDropContainer>
      <BloodDropContainer>
        <BloodDrop
          source={require('../../../assets/images/BloodDrop.png')}
        />      
        <BloodType>
          0 RH-
        </BloodType>
      </BloodDropContainer>
    </Carousel>
  )
}

export default BloodDropsCarousel
