import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import Link from "next/link";
import LogoMindTheGraph from "../assets/logo_mindthegraph.svg";
import { MotionFlex, itemAnimation } from "./animation";

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
  useMediaQuery,
} from "@chakra-ui/react";
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaskedCpfInput from "./MaskedInputCpf";
import { useRouter } from "next/router";

type LoginFormData = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const LoginValFormSchema = yup.object().shape({
  username: yup.string().required("Nome de Usúario Obrigatório"),
  first_name: yup.string().required("Primeiro Nome Obrigatório"),
  last_name: yup.string().required("Último Nome Obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Pelo meno 8 caracteres, uma letra minúscula, uma letra maiúscula e um numero "
    )
    .min(6, "Mínimo de 6 caracteres")
    .required("Senha obrigatória"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function RegisterUserComponent() {
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(null);
  console.log("error", error);

  const router = useRouter();

  const notify = () => toast("Usúario cadastrado com sucesso!");
  const notifyFail = (message) => toast(message);
  const [values, setValues] = useState({
    showPassword: false,
  });

  const [valuesConfirmation, setValuesConfirmation] = useState({
    showPasswordConfirmation: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowPasswordConfirmation = () => {
    setValuesConfirmation({
      ...valuesConfirmation,
      showPasswordConfirmation: !valuesConfirmation.showPasswordConfirmation,
    });
  };

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginValFormSchema),
  });

  const postApi = async (values) => {
    const postData = {
      user: {
        username: values.username,
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        cpf: cpf,
        password: values.password,
        password_confirmation: values.password_confirmation,
      },
    };
    try {
      const { data } = await api.post("/users", postData);
      setTimeout(() => {
        router.push("/RegisterUser");
      }, 5000);

      notify();
    } catch (error) {
      notifyFail(error.response.data.error);
    }
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
            w={340}
          >
            <form onSubmit={handleSubmit(postApi)}>
              <Stack
                alignItems="center"
                pl={10}
                pr={10}
                pt={8.5}
                pb={8.5}
                spacing="1.5rem"
              >
                <InputGroup w="100%">
                  <Stack spacing="4">
                    <Input
                      name="username"
                      width="92"
                      type="tel"
                      label="Nome de Usuário"
                      error={errors.username}
                      {...register("username")}
                    />
                    <Input
                      name="first_name"
                      width="92"
                      type="tel"
                      label="Primeiro Nome"
                      error={errors.first_name}
                      {...register("first_name")}
                    />
                    <Input
                      name="last_name"
                      width="92"
                      type="tel"
                      label="Último Nome"
                      error={errors.last_name}
                      {...register("last_name")}
                    />
                    <Input
                      name="email"
                      width="92"
                      type="tel"
                      label="Email"
                      error={errors.email}
                      {...register("email")}
                    />

                    <Text>CPF</Text>
                    <MaskedCpfInput
                      placeholder={"000.000.000-00"}
                      value={cpf}
                      onChange={(event) => setCpf(event.target.value)}
                    />
                  </Stack>
                </InputGroup>
                <InputGroup w="100%">
                  <Box>
                    <Flex>
                      <Text fontFamily="heading" fontSize="md" color="dark.200">
                        Senha
                      </Text>
                      <Spacer />
                    </Flex>
                    <InputGroup>
                      <Input
                        name="password"
                        width="92"
                        type={values.showPassword ? "text" : "password"}
                        error={errors.password}
                        {...register("password")}
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

                    <Flex mt="4">
                      <Text fontFamily="heading" fontSize="md" color="dark.200">
                        Confirme a senha
                      </Text>
                      <Spacer />
                    </Flex>
                    <InputGroup mb="4">
                      <Input
                        name=" password_confirmation"
                        width="92"
                        type={
                          valuesConfirmation.showPasswordConfirmation
                            ? "text"
                            : "password"
                        }
                        error={errors.password_confirmation}
                        {...register("password_confirmation")}
                      />

                      <InputRightElement>
                        <IconButton
                          aria-label="Change Icon"
                          onClick={handleClickShowPasswordConfirmation}
                          bg="none"
                        >
                          {valuesConfirmation.showPasswordConfirmation ? (
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
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Registrar
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
            </form>
          </Flex>
        </Flex>
      </MotionFlex>
    </Box>
  );
}
