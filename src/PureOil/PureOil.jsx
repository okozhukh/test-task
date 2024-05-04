import React from 'react';
import {Text, Button, Flex, TextField, Separator, Tabs, Box} from '@radix-ui/themes';
import {
    IN_STOCK_HEADING,
    PRODUCT_CODE,
    PRODUCT_TITLE,
    PRICE,
    ADD_TO_CART,
    RETINOL_ACID,
    USE,
    INGREDIENTS
} from "./constants";

function PureOil() {
    return (
        <Flex gap="30px">
            <Flex direction="column">
                <img src="https://e-c.storage.googleapis.com/res/212989e2-a6db-4270-b7bf-6c10627b34d1/original"
                     alt="pure-oil"
                     style={{
                         display: 'cover',
                         objectFit: 'contain',
                         height: 400,
                         marginTop: 10,
                         marginLeft: 100,
                     }}/>
                <img src="https://e-c.storage.googleapis.com/res/212989e2-a6db-4270-b7bf-6c10627b34d1/original"
                     alt="pure-oil"
                     style={{
                         display: 'cover',
                         objectFit: 'contain',
                         width: 'fit-content',
                         height: 150,
                         border: "1px black solid",
                         marginTop: 25,
                         marginLeft: 35,
                     }}/>
            </Flex>
            <Flex direction="column" maxWidth="50%" style={{marginLeft: "150px"}}>
                <Flex direction="column" style={{textAlign: "left"}}>
                    <Text size="3" weight="regular" color="grass" style={{marginBottom: "5px"}}>{IN_STOCK_HEADING}</Text>
                    <Text size="5" weight="bold" style={{marginBottom: "10px"}}>{PRODUCT_TITLE}</Text>
                    <Text size="1" weight="medium" color="gray" style={{marginBottom: "15px"}}>{PRODUCT_CODE}</Text>
                    <Text size="5" weight="medium" style={{marginBottom: "30px"}}>{PRICE}</Text>
                </Flex>
                <Separator my="3" size="4"/>
                <Flex justify="between" style={{marginTop: "10px", marginBottom: "20px"}}>
                    <TextField.Root type="number" min={1} defaultValue={1} style={{flexBasis: '10%'}}/>
                    <Button style={{flexBasis: '70%'}} radius="large" color="orange">{ADD_TO_CART}</Button>
                </Flex>
                <Tabs.Root defaultValue="description">
                    <Tabs.List>
                        <Tabs.Trigger value="description">DESCRIPTION</Tabs.Trigger>
                    </Tabs.List>
                    <Box pt="3">
                        <Tabs.Content value="description">
                            <Flex direction="column" gap="20px">
                                <Text align="left" size="3" color="gray" wrap="wrap">{RETINOL_ACID}</Text>
                                <Text align="left" size="3" color="gray">{USE}</Text>
                                <Text align="left" size="3" color="gray">{INGREDIENTS}</Text>
                            </Flex>
                        </Tabs.Content>
                    </Box>
                </Tabs.Root>
            </Flex>
        </Flex>
    )
}
export default PureOil