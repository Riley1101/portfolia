import MainContainer from "@/layouts/container";
import { useState } from "react";
import Meta from "@/components/common/meta";
import { gql, useMutation } from "@apollo/client";
import BookCard from "@/components/books/card";
import {
  Box,
  Heading,
  Text,
  VStack,
  useToast,
  Grid,
  HStack,
  Button,
  GridItem,
  Input,
  CircularProgress,
} from "@chakra-ui/react";
const meta = {
  title: "Books | Arkar Kaung Myat — An Inspiring Developer, travelling in CS",
  description:
    "A collection of interesting books that I read or look forward to reading them.",
  url: "https://arkardev.space/",
  image: "/static/general/meta.png",
  tags: ["Books", "Articles"],
};

const currentData = [
  {
    id: 1,
    progress: 30,
    title: "The art of computer programming",
    description:
      "All about Algorithms, Mathematical Preliminaries, rich exercices and explaination on information structures. ",
    image: "/static/books/artofcs.png",
  },
  {
    id: 2,
    progress: 60,
    title: "AI and machine learning for coders",
    description:
      "Introducing hello world of ML with tensorflow, extensive practices and explinations on neural networks with python",
    image: "/static/books/ai_and_ml_for_coders.jpg",
  },
  {
    id: 3,
    progress: 70,
    title: "Never grow up",
    description:
      " Chan's life story from childhood years at the China Drama Academy, his big breaks in Hong Kong and Hollywood and honorary Academy Award for his lifetime achievement ",
    image: "/static/books/jackie.jpg",
  },
];
const wishData = [
  {
    id: 1,
    progress: 0,
    title: "Good Math",
    description:
      " A Geek's Guide to the Beauty of Numbers, Logic, and Computation (Pragmatic Programmers).",
    image: "/static/books/math.jpg",
  },
  {
    id: 2,
    progress: 0,
    title: "Python machine learning",
    description:
      "Applied machine learning with a solid foundation in theory. Revised and expanded for TensorFlow 2, GANs, and reinforcement learning.",
    image: "/static/books/ml_python.jpg",
  },
];
const doneData = [
  {
    id: 1,
    progress: 100,
    title: "Computer science distilled",
    description:
      "A walkthrough of computer science concepts you must know. Designed for readers who don't care for academic formalities ",
    image: "/static/books/csdistilled.jpg",
  },
  {
    id: 2,
    progress: 100,
    title: "Learning Patterns, Patterns for building powerful web applications",
    description:
      "About design patterns and component patterns for building  web apps with vanilla JavaScript and React ",
    image: "/static/books/patterndev.svg",
  },
];
const Books = () => {
  const [book, setBook] = useState("");
  const [suggest, setSuggest] = useState(false);
  const BOOK_SUGGESTION = gql`
    mutation ContactMutation($message: String!) {
      createContact(data: { message: $message }) {
        id
      }
    }
  `;
  const [addBook, { loading }] = useMutation(BOOK_SUGGESTION);
  const toast = useToast();
  async function onSubmit() {
    addBook({ variables: { message: book } });
    setBook("");
    toast({
      title: "Thank you for your suggestion ❤️",
      description: "️I will definately try the book 🤖",
      status: "success",
      duration: 3000,
      variant: "left-accent",
      isClosable: true,
    });
  }

  return (
    <MainContainer>
      <Meta meta={meta}></Meta>
      <Box my="8" px="4">
        <VStack alignItems={"flex-start"} spacing=".5em" mb="4">
          <Heading as="h1" fontSize={["2xl", "4xl"]}>
            Books.
          </Heading>
          <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
            A collection of interesting books that I read or look forward to
            reading them.
          </Text>
        </VStack>
        <Box>
          <Box mb="8">
            <Text
              onClick={() => setSuggest(!suggest)}
              color="blue.500"
              cursor={"pointer"}
              tabIndex={0}
              mb="4"
            >
              Suggest me a book ❤️{" "}
              {loading && <CircularProgress isIndeterminate size="15px" />}
            </Text>
            {suggest && (
              <HStack>
                <Input
                  transition={"all 250ms ease"}
                  value={book}
                  onChange={(e) => setBook(e.target.value)}
                  placeholder="Book name"
                ></Input>
                {book.length > 10 && (
                  <Button onClick={() => onSubmit()}>Submit</Button>
                )}
              </HStack>
            )}
          </Box>
          <Text as={"h2"} fontWeight="bold" mb="4">
            Currently Reading
          </Text>
          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)"]}
            gap={4}
            gridAutoFlow="dense"
            mb="12"
          >
            {currentData.map((bok) => (
              <GridItem key={bok.id}>
                <BookCard data={bok}></BookCard>
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box>
          <Text as={"h2"} fontWeight="bold" mb="4">
            Read
          </Text>
          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)"]}
            gap={4}
            gridAutoFlow="dense"
            mb="12"
          >
            {doneData.map((bok) => (
              <GridItem key={bok.id}>
                <BookCard data={bok}></BookCard>
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box>
          <Text as={"h2"} fontWeight="bold" mb="4">
            Wishlist
          </Text>
          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)"]}
            gap={4}
            gridAutoFlow="dense"
            mb="12"
          >
            {wishData.map((bok) => (
              <GridItem key={bok.id}>
                <BookCard data={bok}></BookCard>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </MainContainer>
  );
};
export default Books;
