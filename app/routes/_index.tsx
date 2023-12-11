import type {MetaFunction} from "@remix-run/node";
import {Button, Flex} from "@mantine/core";
import {IconBrandBandcamp, IconBrandSpotify, IconBrandYoutube} from "@tabler/icons-react";
import {useHover} from "@mantine/hooks";

export const meta: MetaFunction = () => {
    return [
        {title: "gab"},
        {name: "description", content: "musician and developer"},
    ];
};

const buttons = [
    {label: 'Spotify', icon: <IconBrandSpotify size={32}/>, color: 'green'},
    {label: 'YouTube', icon: <IconBrandYoutube size={32}/>, color: 'red'},
    {label: 'Bandcamp', icon: <IconBrandBandcamp size={32}/>, color: 'blue'},
];

export default function Index() {
    return (
        <div style={{fontFamily: "system-ui, sans-serif", lineHeight: "1.8"}}>
            <Flex
                mih={50}
                gap="sm"
                justify="center"
                align="center"
                direction="column"
            >
                <h1 style={{
                    fontSize: "3rem",
                    backgroundImage: 'linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 700
                }}>gab</h1>
                {buttons.map(({label, icon, color}, idx) => {
                    const {hovered, ref} = useHover();
                    return (
                        <div key={idx} ref={ref}>
                            <Button
                                size="xl"
                                justify="center"
                                leftSection={icon}
                                variant={hovered ? "outline" : "default"}
                                mt="md"
                                color={color}
                                radius="xl"
                                style={{transition: 'all 0.2s ease'}}
                            >
                                {label}
                            </Button>
                        </div>
                    );
                })}
            </Flex>
        </div>
    );
}

