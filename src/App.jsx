import { Stack } from "@mui/system"
import { ArticleCard } from "./Card"
import { Grid, TextInput, Container, SimpleGrid, } from "@mantine/core"
import { useState } from "react"
import useChatGPT from "./useChatGPT";



function App() {

  const { aiResponse, aiImage, userInput, loading, handleUserInput, handleAiActivate } = useChatGPT();


  return (
    <>
     <Stack justifyContent={"center"} height={'100vh'}>
      <Container my='lg' >
        <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'lg', cols: 1 }]}>
          <Grid gutter="md">
            <Grid.Col span={8}>
              <TextInput
                onChange={handleUserInput}
                value={userInput}
                label="Write"
                mt="md"
                autoComplete="nope"
              />
            </Grid.Col>
          </Grid>
          <Grid>
            <Grid.Col span={10}>
              <ArticleCard
                image={aiImage}
                link="https://mantine.dev/"
                title={userInput}
                rating="outstanding"
                description={loading ? 'loading...' : aiResponse}
                author={{
                  "name": "Bill Wormeater",
                  "image": "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                }}
                handleAiActivate = {handleAiActivate}
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
