import { Stack } from "@mui/system"
import { ArticleCard } from "./Card"
import { Grid, TextInput, Container, SimpleGrid, } from "@mantine/core"
import { useState } from "react"



function App() {


const [cardTitle, setCardTitle] = useState('');


  return (
    <>
     <Stack justifyContent={"center"} height={'100vh'}>
      <Container my='lg' >
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
          <Grid gutter="md">
            <Grid.Col span={8}>
              <TextInput
                onChange={e => setCardTitle(e.target.value)}
                value={cardTitle}
                label="Write"
                mt="md"
                autoComplete="nope"
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={10}>
              <ArticleCard
                image="https://i.imgur.com/Cij5vdL.png"
                link="https://mantine.dev/"
                title={cardTitle}
                rating="outstanding"
                description="Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires."
                author={{
                  "name": "Bill Wormeater",
                  "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                }}
              />
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
      </Stack>
    </>
  )
}

export default App
