'use client'

import React, { use } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Heart } from 'lucide-react'

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #f8f9fa;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const Logo = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  padding: 8px 16px;
  border-radius: 20px;

  &:hover {
    color: #ffd700;
    background-color: rgba(255, 215, 0, 0.1);
  }
`

const HeroSection = styled.section`
  display: flex;
  margin: 60px 0;
  background-color: #ffd700;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const HeroContent = styled.div`
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeroTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #333;
`

const HeroText = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
  color: #555;
`

const Button = styled(motion.button)`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #555;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`

const HeroImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`

const IconSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`

const IconTitle = styled.h3`
  margin: 20px 0 10px;
  font-size: 20px;
  color: #333;
`

const IconText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #666;
`

export default function Component() {
  return (
    <Container>
      <Header>
        <Logo>COMPANY LOGO</Logo>
        <Nav>
          <NavLink href="#about">About us</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </Nav>
      </Header>

      <HeroSection>
        <HeroContent>
          <HeroTitle>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</HeroTitle>
          <HeroText>
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
            dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra.
          </HeroText>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LOREM IPSUM
          </Button>
        </HeroContent>
        <HeroImageContainer>
          <HeroImage src="/placeholder.svg?height=400&width=400" alt="Hero image" />
        </HeroImageContainer>
      </HeroSection>

      <IconSection>
        <IconBox
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MessageCircle size={48} color="#ffd700" />
          <IconTitle>Lorem ipsum dolor</IconTitle>
          <IconText>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque.</IconText>
        </IconBox>
        <IconBox
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Calendar size={48} color="#ffd700" />
          <IconTitle>Lorem ipsum dolor</IconTitle>
          <IconText>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque.</IconText>
        </IconBox>
        <IconBox
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Heart size={48} color="#ffd700" />
          <IconTitle>Lorem ipsum dolor</IconTitle>
          <IconText>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque.</IconText>
        </IconBox>
      </IconSection>
    </Container>
  )
}