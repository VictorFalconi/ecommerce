import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
    margin: 20px 0px;

`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fcf5f5"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 75%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VICATH.</Logo>
                <Description>
                    Our enterprise is very proud to present you this webpage. We will
                    sell you only the best clothes available in the market, handmade
                    with the best materials by experienced workers and always at a
                    fair price.
                </Description>
                <SocialContainer>
                    <SocialIcon color='#3b5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='#e4405f'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='#55acee'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='#e60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accesories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: '10px'}}/> 123 Some Street, North State 98765
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: '10px'}}/> +1 987 65 43
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: '10px'}}/> contact@email.com
                </ContactItem>
                <Payment src='https://images.squarespace-cdn.com/content/v1/5f458f9a61a99522651e869b/1600822452444-CBTLRA7YNMK7JTZ5RCLO/web-payment-icons.png'/>
            </Right>
        </Container>
    )
}

export default Footer
