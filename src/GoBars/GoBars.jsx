import React from 'react';
import {Text, Button, Flex, TextField} from '@radix-ui/themes';
import {PRODUCT, SKU, PRICE, QUANTITY, ADD_TO_CART, BUY_NOW, PRODUCT_INFO, PRODUCT_DETAIL} from "./constants";

function GoBars() {
    return (<Flex gap="25px" style={{marginTop:"10px"}}>
            <Flex direction="column">
                <img
                    src="https://static.wixstatic.com/media/94e66f_369ba69efe004a85b6ed680383d81b0e~mv2_d_1500_1500_s_2.png/v1/fill/w_625,h_625,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/94e66f_369ba69efe004a85b6ed680383d81b0e~mv2_d_1500_1500_s_2.png"
                    alt="go-bars"
                    style={{
                        display: 'cover',
                        objectFit: 'contain',
                        height: 500,
                        marginLeft: 50,
                        border: "1px black solid",
                    }}/>
            </Flex>
            <Flex direction="column" maxWidth="50%" style={{marginLeft: "50px"}}>
                <Flex direction="column" style={{textAlign: "left"}}>
                    <Text size="5" weight="regular">{PRODUCT}</Text>
                    <Text size="4" color="gray">{SKU}</Text>
                    <Text size="3" style={{marginTop:"25px", marginBottom:"25px"}}>{PRICE}</Text>
                    <Text size="3" color="gray">{QUANTITY}</Text>
                </Flex>
                <Flex direction="column" style={{marginTop: "10px", marginBottom: "20px"}}>
                    <TextField.Root type="number" min={1} defaultValue={1} style={{width: "10%", marginBottom:"15px"}}/>
                    <Button size="3" style={{width:"50%", backgroundColor: "#F2D5CE", color: "black",marginTop:"15px", marginBottom:"25px"}}>{ADD_TO_CART}</Button>
                    <Button size="3" style={{width:"50%", backgroundColor: "black"}}>{BUY_NOW}</Button>
                </Flex>
                <Text align="left" size="3" style={{marginTop:"25px", marginBottom:"15px"}}>{PRODUCT_INFO}</Text>
                <Text align="left" size="3">{PRODUCT_DETAIL}</Text>
            </Flex>
        </Flex>)
}
export default GoBars