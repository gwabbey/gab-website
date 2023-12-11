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

export default function Index() {
    const {hovered, ref} = useHover();
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
                <div ref={ref}>
                    <Button size="xl" justify="center" leftSection={<IconBrandSpotify size={32}/>}
                            variant={hovered ? "outline" : "default"} mt="md" color="green"
                            radius="xl">
                        Spotify
                    </Button>
                </div>
                <Button size="xl" justify="center" leftSection={<IconBrandYoutube size={32}/>} variant="default" mt="md"
                        radius="xl">
                    YouTube
                </Button>
                <Button size="xl" justify="center" leftSection={<IconBrandBandcamp size={32}/>} variant="default"
                        mt="md"
                        radius="xl">
                    Bandcamp
                </Button>
            </Flex>
        </div>
    );
}

