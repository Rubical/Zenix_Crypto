import React from "react";

import { Glitch } from "rn-glitch-effect";
const About = () => {
  return <Glitch text={"GLITCH"} mainColor={"black"} shadowColor={"green"} />;
};
const styles = StyleSheet.create({
  containerWithBg: { backgroundColor: "red", marginBottom: "5%" },
});
export default About;
