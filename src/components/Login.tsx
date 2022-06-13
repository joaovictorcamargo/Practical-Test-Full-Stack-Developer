import React, { useState } from "react";
import LogoMindTheGraph from "../assets/logo_mindthegraph.svg";
import { useForm } from "react-hook-form";

import {
  Box,
  Text,
  Stack,
  InputRightElement,
  IconButton,
  InputGroup,
  Flex,
  Button,
  Spacer,
  Input,
} from "@chakra-ui/react";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
/* import { AuthContext } from "../components/context/auth";
 */ import { MotionFlex, itemAnimation } from "../components/animation";
import Link from "next/link";

type LoginFormData = {
  user: string;
  password: string;
};

const LoginValFormSchema = yup.object().shape({
  user: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()

    .min(7, "Senha inválida")
    .max(14, "Senha inválida")
    .required("Senha obrigatória"),
});

export default function Login() {
  /* const { login } = useContext(AuthContext); */
  const [inputUser, setInputUser] = useState("");
  const [password, setPassword] = useState("");

  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginValFormSchema),
  });

  const handleSubmitt = async (e) => {
    e.preventDefault();
    console.log("submit", { inputUser, password });

    /*     login(inputUser, password); */
  };

  return (
    <Box py="10rem" bgGradient="linear(to-l, pink.100, orange.100)">
      <MotionFlex
        variants={itemAnimation}
        initial="hidden"
        animate="visible"
        bg="light.50"
        w="100%"
        h="100%"
        justifyContent="center"
      >
        <Flex flexDir="column" alignItems="center" justifyContent="center">
          <LogoMindTheGraph />
          <Text
            fontFamily="heading"
            fontSize="1.75rem"
            color="white.100"
            p="2rem"
          >
            Crie sua conta
          </Text>
          <Flex
            py="2rem"
            alignItems="center"
            justifyContent="center"
            borderRadius={5}
            shadow="0.125rem"
            bg="white"
            w={350}
          >
            <Stack alignItems="center" spacing="1.5rem">
              <InputGroup w="100%">
                <Box>
                  <Text fontFamily="heading" fontSize="md" color="dark.200">
                    Email
                  </Text>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={inputUser}
                    onChange={(e) => setInputUser(e.target.value)}
                  />
                </Box>
              </InputGroup>
              <InputGroup w="100%">
                <Box>
                  <Flex>
                    <Text fontFamily="heading" fontSize="md" color="dark.200">
                      Senha
                    </Text>
                    <Spacer />

                    <Text
                      as="button"
                      fontFamily="heading"
                      fontSize="md"
                      color="primary.50"
                    >
                      Esqueceu sua senha?
                    </Text>
                  </Flex>
                  <InputGroup>
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name="password"
                      id="password"
                      type={values.showPassword ? "text" : "password"}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label="Change Icon"
                        onClick={handleClickShowPassword}
                        bg="none"
                      >
                        {values.showPassword ? (
                          <IoEyeSharp />
                        ) : (
                          <BsEyeSlashFill />
                        )}
                      </IconButton>
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </InputGroup>

              <Button
                h={10}
                w={92}
                bg="pink.100"
                color="white.100"
                fontFamily="heading"
                fontWeight="none"
                isLoading={isSubmitting}
                onClick={handleSubmitt}
              >
                Entrar
              </Button>
              <Link href="/" color="primary.50">
                <Text
                  as="button"
                  justifyContent="center"
                  fontFamily="heading"
                  fontSize="md"
                  color="primary.50"
                >
                  Voltar
                </Text>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </MotionFlex>
    </Box>
  );
}
