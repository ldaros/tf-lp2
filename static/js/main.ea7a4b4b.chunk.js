(this["webpackJsonptf-lp2"] = this["webpackJsonptf-lp2"] || []).push([
  [0],
  {
    106: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(0),
        a = n.n(r),
        i = n(33),
        o = n.n(i),
        c = n(47),
        s = n(48),
        l = n(81),
        m = n(80),
        d = n(79),
        b = n(162),
        x = n(150),
        u = n(151),
        j = n(160),
        A = n(164),
        p = n(24),
        h = n(32),
        g = n.p + "tf-lp2/static/media/logo.62950018.svg",
        O = n.p + "tf-lp2/static/media/head_temp.c9ba4065.png",
        v = n.p + "tf-lp2/static/media/video_bg.2578cd60.webm",
        f = n(1),
        w = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        };
      function E() {
        var e = Object(p.a)();
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 1,
          className: "header",
          alignItems: "center",
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: 4,
          position: "relative",
          children: [
            Object(f.jsx)("video", {
              autoPlay: !0,
              loop: !0,
              muted: !0,
              controls: !1,
              style: w,
              poster: O,
              children: Object(f.jsx)("source", { src: v, type: "video/webm" }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              children: Object(f.jsx)(h.a, {
                src: g,
                sx: { maxHeight: { xs: "120px", sm: "150px", md: "190px" } },
                fit: "contain",
                easing: "none",
                shift: "bottom",
              }),
            }),
            Object(f.jsxs)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              mt: 2,
              children: [
                Object(f.jsx)(A.a, {
                  variant: "body1",
                  color: "white",
                  fontWeight: "bold",
                  sx: { fontSize: { md: "1.4em" } },
                  children: "Participe da Feira do Livro 2021!",
                }),
                Object(f.jsx)(A.a, {
                  variant: "body1",
                  fontWeight: "bold",
                  color: e.palette.secondary.light,
                  sx: { fontSize: { md: "1.4em" } },
                  children: "Dias 8 a 15 de Dezembro.",
                }),
              ],
            }),
          ],
        });
      }
      var y = n(145),
        Q = n(165),
        M = n(166),
        I = n(168);
      function B(e) {
        var t = Object(p.a)(),
          n = Object(f.jsx)(Q.a, {
            component: "img",
            sx: { width: { xs: 100, md: 130 }, alignSelf: "flex-end" },
            image: e.convidado.img,
            alt: e.convidado.nome,
          });
        return Object(f.jsxs)(M.a, {
          sx: {
            display: "flex",
            backgroundColor: t.palette.primary.main,
            height: "100%",
            "&:hover, &:active, &:focus": { boxShadow: "5px 2px 20px #00838F" },
          },
          children: [
            e.even ? null : n,
            Object(f.jsxs)(I.a, {
              children: [
                Object(f.jsx)(A.a, {
                  variant: "h6",
                  color: t.palette.secondary.light,
                  children: e.convidado.nome,
                }),
                Object(f.jsx)(A.a, {
                  variant: "body2",
                  color: t.palette.secondary.contrastText,
                  children: e.convidado.texto,
                }),
              ],
            }),
            e.even ? n : null,
          ],
        });
      }
      var S = n.p + "tf-lp2/static/media/bueno.212e039a.png",
        C = {
          tenorio: {
            nome: "Jeferson Ten\xf3rio",
            texto:
              "Escritor de O beijo na parede, eleito o livro do ano pela Associa\xe7\xe3o Ga\xfacha de Escritores.",
            img: n.p + "tf-lp2/static/media/tenorio.bfde82cd.png",
          },
          bueno: {
            nome: "Eduardo Bueno",
            texto:
              "Eduardo Bueno \xe9 um jornalista, tradutor, escritor e youtuber no canal Buenas Ideias, onde narra a hist\xf3ria do Brasil de forma descontra\xedda.",
            img: S,
          },
        };
      function z() {
        var e = Object(p.a)();
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 2,
          alignItems: "stretch",
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: 3,
          pb: { xs: 5, md: 8 },
          children: [
            Object(f.jsxs)(j.a, {
              item: !0,
              xs: 12,
              children: [
                Object(f.jsx)(A.a, {
                  variant: "h5",
                  align: "center",
                  color: e.palette.primary.dark,
                  sx: { fontSize: { md: "1.9em" } },
                  mb: 1,
                  children: "Convidados",
                }),
                Object(f.jsx)(A.a, {
                  mb: 3,
                  variant: "body2",
                  align: "center",
                  color: e.palette.grayText,
                  sx: { fontSize: { md: "1em" } },
                  children:
                    "Confira alguns dos autores presentes nesta edi\xe7\xe3o da Feira do Livro:",
                }),
              ],
            }),
            Object(f.jsx)(y.a, {
              direction: "right",
              in: !0,
              timeout: 1e3,
              mountOnEnter: !0,
              children: Object(f.jsx)(j.a, {
                item: !0,
                xs: 12,
                sm: 6,
                md: 6,
                children: Object(f.jsx)(B, { convidado: C.tenorio }),
              }),
            }),
            Object(f.jsx)(y.a, {
              direction: "left",
              in: !0,
              timeout: 1e3,
              mountOnEnter: !0,
              children: Object(f.jsx)(j.a, {
                item: !0,
                xs: 12,
                sm: 6,
                md: 6,
                children: Object(f.jsx)(B, { convidado: C.bueno, even: !0 }),
              }),
            }),
          ],
        });
      }
      var Y = n(146),
        F = n.p + "tf-lp2/static/media/img-local.8f17a308.svg",
        T = {
          borderRadius: "4px",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
          overflow: "hidden",
          border: 0,
        };
      function R() {
        var e = Object(p.a)();
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 2,
          alignItems: "center",
          sx: { backgroundColor: e.palette.primary.main },
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: 3,
          pb: { xs: 5, md: 8 },
          children: [
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              children: Object(f.jsx)(A.a, {
                variant: "h5",
                align: "center",
                color: "white",
                sx: { mb: { xs: 1, md: 3 }, fontSize: { md: "1.9em" } },
                mt: -1,
                children: "Localiza\xe7\xe3o",
              }),
            }),
            Object(f.jsxs)(j.a, {
              item: !0,
              xs: 12,
              md: 6,
              align: "center",
              children: [
                Object(f.jsx)(h.a, {
                  src: F,
                  sx: {
                    maxHeight: { xs: "100px", md: "150px" },
                    mb: { md: 3 },
                  },
                  fit: "contain",
                  easing: "none",
                  shift: "bottom",
                }),
                Object(f.jsx)(A.a, {
                  variant: "body2",
                  sx: { fontSize: { md: "1rem" }, mb: { xs: 2 } },
                  color: "white",
                  mt: 2,
                  children:
                    "Veja no mapa onde o evento ser\xe1 localizado. Diferente da anterior, nesta edi\xe7\xe3o a Feira do Livro voltar\xe1 a ser realizada no Bourbon Shopping.",
                }),
              ],
            }),
            Object(f.jsx)(Y.a, {
              in: !0,
              timeout: 5e3,
              children: Object(f.jsx)(j.a, {
                item: !0,
                xs: 12,
                md: 6,
                sx: { height: { xs: "350px", md: "400px" } },
                children: Object(f.jsx)("iframe", {
                  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.470290394818!2d-52.3957468849259!3d-28.25375328256874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d3b037fc8edaa67!2sBourbon%20Shopping%20Passo%20Fundo!5e0!3m2!1spt-BR!2sbr!4v1630606985214!5m2!1spt-BR!2sbr",
                  width: "100%",
                  height: "100%",
                  style: T,
                  allowFullScreen: "",
                  loading: "lazy",
                  title: "Mapa",
                }),
              }),
            }),
          ],
        });
      }
      var U = n(39),
        k = n.n(U),
        D = n(53),
        V = n(12),
        L = n(152),
        X = n(157),
        H = n(155),
        G = n(156),
        Z = n.p + "tf-lp2/static/media/livros.e1973b55.png",
        q = "https://tf-landingpage.glitch.me/api";
      function N() {
        var e = Object(p.a)(),
          t = a.a.useState(""),
          n = Object(V.a)(t, 2),
          r = n[0],
          i = n[1],
          o = a.a.useState(""),
          c = Object(V.a)(o, 2),
          s = c[0],
          l = c[1],
          m = a.a.useState(!1),
          d = Object(V.a)(m, 2),
          b = d[0],
          x = d[1],
          u = a.a.useState(!1),
          g = Object(V.a)(u, 2),
          O = g[0],
          v = g[1],
          w = a.a.useState("success"),
          E = Object(V.a)(w, 2),
          y = E[0],
          Q = E[1],
          M = a.a.useState(""),
          I = Object(V.a)(M, 2),
          B = I[0],
          S = I[1],
          C = function () {
            v(!1);
          },
          z = function (e) {
            e
              ? (Q("success"), S("Inscrito com sucesso!"), v(!0))
              : (Q("error"), S("Erro ao enviar mensagem!"), v(!0));
          };
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 2,
          alignItems: "center",
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: { xs: 4, md: 9 },
          pb: { xs: 7, md: 10 },
          children: [
            Object(f.jsxs)(j.a, {
              item: !0,
              xs: 12,
              md: 6,
              align: "center",
              children: [
                Object(f.jsx)(h.a, {
                  src: Z,
                  align: "center",
                  sx: { maxWidth: { xs: 180, md: 210 } },
                }),
                Object(f.jsx)(A.a, {
                  variant: "h5",
                  align: "center",
                  fontWeight: "bold",
                  color: e.palette.primary.dark,
                  sx: {
                    mb: { xs: 1, md: 1 },
                    fontSize: { xs: "1.1em", md: "1.4em" },
                  },
                  mt: 2,
                  children:
                    "Se inscreva em nosso newsletter e ganhe 10% de desconto em qualquer livro!",
                }),
              ],
            }),
            Object(f.jsxs)(j.a, {
              item: !0,
              xs: 12,
              md: 6,
              align: "center",
              children: [
                Object(f.jsx)(L.a, {
                  value: r,
                  onChange: function (e) {
                    return i(e.target.value);
                  },
                  id: "emails",
                  label: "E-mail",
                  variant: "outlined",
                  fullWidth: !0,
                  error: s.length > 0,
                  helperText: s,
                }),
                Object(f.jsx)(G.a, {
                  onClick: function () {
                    var e = !0;
                    0 === r.length
                      ? (l("O e-mail \xe9 obrigat\xf3rio"), (e = !1))
                      : !(function (e) {
                          return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                            String(e).toLowerCase()
                          );
                        })(r)
                      ? (l("E-mail inv\xe1lido"), (e = !1))
                      : l("");
                    if (!e) return;
                    !(function (e, t, n) {
                      W.apply(this, arguments);
                    })(r, x, z);
                  },
                  variant: "contained",
                  color: "secondary",
                  loading: b,
                  sx: { marginTop: 2 },
                  children: "Inscrever-se",
                }),
              ],
            }),
            Object(f.jsx)(X.a, {
              open: O,
              autoHideDuration: 6e3,
              onClose: C,
              children: Object(f.jsx)(H.a, {
                onClose: C,
                severity: y,
                sx: { width: "100%" },
                children: B,
              }),
            }),
          ],
        });
      }
      function W() {
        return (W = Object(D.a)(
          k.a.mark(function e(t, n, r) {
            var a, i, o;
            return k.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      n(!0),
                      (a = {
                        email: t,
                        subscribe: !0,
                        only_subscribe: !0,
                        message: "",
                        name: "",
                      }),
                      (i = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(a),
                      }),
                      (e.next = 5),
                      fetch(q, i)
                    );
                  case 5:
                    return (o = e.sent), (e.next = 8), o.json();
                  case 8:
                    200 === e.sent.status ? r(!0) : r(!1), n(!1);
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var K,
        P = n(153),
        J = n(148),
        $ = n(161),
        _ = n(170),
        ee = n(169),
        te = ["title", "titleId"];
      function ne() {
        return (
          (ne =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ne.apply(this, arguments)
        );
      }
      function re(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function ae(e, t) {
        var n = e.title,
          a = e.titleId,
          i = re(e, te);
        return r.createElement(
          "svg",
          ne(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              width: "1em",
              height: "1em",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 20 20",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          K ||
            (K = r.createElement("path", {
              d: "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699v3.699z",
              fill: "currentColor",
            }))
        );
      }
      var ie,
        oe = r.forwardRef(ae),
        ce = (n.p, ["title", "titleId"]);
      function se() {
        return (
          (se =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          se.apply(this, arguments)
        );
      }
      function le(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function me(e, t) {
        var n = e.title,
          a = e.titleId,
          i = le(e, ce);
        return r.createElement(
          "svg",
          se(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              width: "1em",
              height: "1em",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          ie ||
            (ie = r.createElement(
              "g",
              { fill: "none" },
              r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
                fill: "currentColor",
              })
            ))
        );
      }
      var de,
        be = r.forwardRef(me),
        xe = (n.p, ["title", "titleId"]);
      function ue() {
        return (
          (ue =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          ue.apply(this, arguments)
        );
      }
      function je(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ae(e, t) {
        var n = e.title,
          a = e.titleId,
          i = je(e, xe);
        return r.createElement(
          "svg",
          ue(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              width: "1em",
              height: "1em",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          de ||
            (de = r.createElement(
              "g",
              { fill: "none" },
              r.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067z",
                fill: "currentColor",
              })
            ))
        );
      }
      var pe,
        he = r.forwardRef(Ae),
        ge = (n.p, ["title", "titleId"]);
      function Oe() {
        return (
          (Oe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Oe.apply(this, arguments)
        );
      }
      function ve(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function fe(e, t) {
        var n = e.title,
          a = e.titleId,
          i = ve(e, ge);
        return r.createElement(
          "svg",
          Oe(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              width: "1em",
              height: "1em",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 20 20",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          pe ||
            (pe = r.createElement("path", {
              d: "M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z",
              fill: "currentColor",
            }))
        );
      }
      var we,
        Ee = r.forwardRef(fe),
        ye = (n.p, ["title", "titleId"]);
      function Qe() {
        return (
          (Qe =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Qe.apply(this, arguments)
        );
      }
      function Me(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function Ie(e, t) {
        var n = e.title,
          a = e.titleId,
          i = Me(e, ye);
        return r.createElement(
          "svg",
          Qe(
            {
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              "aria-hidden": "true",
              role: "img",
              width: "1em",
              height: "1em",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 20 20",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          we ||
            (we = r.createElement("path", {
              d: "M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm3.905 7.864c.004.082.005.164.005.244c0 2.5-1.901 5.381-5.379 5.381a5.335 5.335 0 0 1-2.898-.85c.147.018.298.025.451.025c.886 0 1.701-.301 2.348-.809a1.895 1.895 0 0 1-1.766-1.312a1.9 1.9 0 0 0 .853-.033a1.892 1.892 0 0 1-1.517-1.854v-.023c.255.141.547.227.857.237a1.89 1.89 0 0 1-.585-2.526a5.376 5.376 0 0 0 3.897 1.977a1.891 1.891 0 0 1 3.222-1.725a3.797 3.797 0 0 0 1.2-.459a1.9 1.9 0 0 1-.831 1.047a3.799 3.799 0 0 0 1.086-.299a3.834 3.834 0 0 1-.943.979z",
              fill: "currentColor",
            }))
        );
      }
      var Be = r.forwardRef(Ie);
      n.p;
      function Se(e) {
        var t = Object(p.a)(),
          n = a.a.useState(!1),
          r = Object(V.a)(n, 2),
          i = r[0],
          o = r[1];
        return Object(f.jsxs)(f.Fragment, {
          children: [
            Object(f.jsxs)(M.a, {
              sx: {
                height: "100%",
                cursor: "pointer",
                "&:hover, &:active, &:focus": {
                  boxShadow: "11px 2px 54px #00838F",
                },
              },
              onClick: function () {
                return o(!0);
              },
              children: [
                Object(f.jsx)(Q.a, {
                  component: "img",
                  image: e.membro.img,
                  alt: e.membro.nome,
                }),
                Object(f.jsx)(I.a, {
                  children: Object(f.jsx)(A.a, {
                    variant: "body1",
                    align: "center",
                    fontWeight: "bold",
                    children: e.membro.nome,
                  }),
                }),
              ],
            }),
            Object(f.jsx)(P.a, {
              open: i,
              onClose: function () {
                return o(!1);
              },
              closeAfterTransition: !0,
              children: Object(f.jsx)(J.a, {
                in: i,
                children: Object(f.jsx)(M.a, {
                  sx: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: { xs: "90%", md: "500px" },
                  },
                  align: "center",
                  children: Object(f.jsxs)(I.a, {
                    children: [
                      Object(f.jsx)($.a, {
                        src: e.membro.img,
                        sx: { width: 80, height: 80 },
                      }),
                      Object(f.jsx)(A.a, {
                        variant: "h6",
                        component: "h2",
                        align: "center",
                        color: t.palette.primary.dark,
                        children: e.membro.nome,
                      }),
                      Object(f.jsxs)(A.a, {
                        variant: "body1",
                        sx: { mt: 2 },
                        children: ['"', e.membro.descricao, '"'],
                      }),
                      e.membro.email
                        ? Object(f.jsx)(A.a, {
                            variant: "body2",
                            mt: 2,
                            color: "gray",
                            children: e.membro.email,
                          })
                        : null,
                      Object(f.jsxs)(_.a, {
                        mt: 2,
                        children: [
                          e.membro.linkedin
                            ? Object(f.jsx)(ee.a, {
                                sx: { fontSize: 45 },
                                href: e.membro.linkedin,
                                children: Object(f.jsx)(oe, {}),
                              })
                            : null,
                          e.membro.github
                            ? Object(f.jsx)(ee.a, {
                                sx: { fontSize: 45 },
                                href: e.membro.github,
                                children: Object(f.jsx)(be, {}),
                              })
                            : null,
                          e.membro.facebook
                            ? Object(f.jsx)(ee.a, {
                                sx: { fontSize: 45 },
                                href: e.membro.facebook,
                                children: Object(f.jsx)(he, {}),
                              })
                            : null,
                          e.membro.instagram
                            ? Object(f.jsx)(ee.a, {
                                sx: { fontSize: 45 },
                                href: e.membro.instagram,
                                children: Object(f.jsx)(Ee, {}),
                              })
                            : null,
                          e.membro.twitter
                            ? Object(f.jsx)(ee.a, {
                                sx: { fontSize: 45 },
                                href: e.membro.twitter,
                                children: Object(f.jsx)(Be, {}),
                              })
                            : null,
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var Ce = n.p + "tf-lp2/static/media/pedro.6cb098a2.png",
        ze = [
          {
            nome: "Luan Daros",
            img: n.p + "tf-lp2/static/media/luan.d39e9d77.png",
            descricao: "Estudante do projeto #TeuFuturo",
            linkedin: "https://www.linkedin.com/in/darosluan/",
            github: "https://github.com/ldaros",
            email: "darosluan@gmail.com",
          },
          {
            nome: "Victor Andr\xe9 Gopinger de Morais",
            img: n.p + "tf-lp2/static/media/victor.bece4e0f.png",
            descricao: "Estudante do projeto #TeuFuturo",
            email: "victor.andre.morais@gmail.com ",
            github: "https://github.com/victormorais123",
            linkedin:
              "https://www.linkedin.com/in/victor-andre-gopinger-de-morais/",
          },
          {
            nome: "Emanuel Mello de Oliveira",
            descricao: "Estudante do projeto #TeuFuturo",
            img: "data:image/jpeg;base64,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",
            email: "emanuel.mellodeoliveira@gmail.com ",
            github: "https://github.com/emanuel0706",
            linkedin: "https://www.linkedin.com/in/emanuel-mello-de-oliveira/",
          },
          {
            nome: "Pedro Henrique do Amarante",
            img: Ce,
            descricao: "Estudante do projeto #TeuFuturo",
            email: "pedro.hamarante0812@gmail.com",
            github: "https://github.com/PedroAmarante0812",
            linkedin: "https://www.linkedin.com/in/pedro-henrique-do-amarante/",
          },
        ];
      function Ye() {
        var e = Object(p.a)(),
          t = 1e3,
          n = ze.map(function (e, n) {
            return Object(f.jsx)(
              y.a,
              {
                direction: "right",
                in: !0,
                timeout: (t += 500),
                children: Object(f.jsx)(j.a, {
                  item: !0,
                  xs: 6,
                  sm: 3,
                  md: 3,
                  children: Object(f.jsx)(Se, { membro: e }),
                }),
              },
              "t" + n
            );
          });
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 2,
          alignItems: "stretch",
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: 3,
          pb: { xs: 5, md: 8 },
          sx: { backgroundColor: "#EDEDED" },
          children: [
            Object(f.jsxs)(j.a, {
              item: !0,
              xs: 12,
              children: [
                Object(f.jsx)(A.a, {
                  variant: "h5",
                  align: "center",
                  color: e.palette.primary.dark,
                  sx: { fontSize: { md: "1.9em" } },
                  mb: 1,
                  children: "Nosso Time",
                }),
                Object(f.jsx)(A.a, {
                  mb: 3,
                  variant: "body2",
                  align: "center",
                  color: "#656565",
                  sx: { fontSize: { md: "1em" } },
                  children:
                    "Pressione no avatar para obter informa\xe7\xf5es sobre contato",
                }),
              ],
            }),
            n,
          ],
        });
      }
      var Fe = n(171),
        Te = n(172),
        Re = n(159),
        Ue = "https://tf-landingpage.glitch.me/api";
      function ke() {
        var e = Object(p.a)(),
          t = a.a.useState(""),
          n = Object(V.a)(t, 2),
          r = n[0],
          i = n[1],
          o = a.a.useState(""),
          c = Object(V.a)(o, 2),
          s = c[0],
          l = c[1],
          m = a.a.useState(""),
          d = Object(V.a)(m, 2),
          b = d[0],
          x = d[1],
          u = a.a.useState(!0),
          h = Object(V.a)(u, 2),
          g = h[0],
          O = h[1],
          v = a.a.useState(""),
          w = Object(V.a)(v, 2),
          E = w[0],
          y = w[1],
          Q = a.a.useState(""),
          M = Object(V.a)(Q, 2),
          I = M[0],
          B = M[1],
          S = a.a.useState(""),
          C = Object(V.a)(S, 2),
          z = C[0],
          Y = C[1],
          F = a.a.useState(!1),
          T = Object(V.a)(F, 2),
          R = T[0],
          U = T[1],
          k = a.a.useState(!1),
          D = Object(V.a)(k, 2),
          Z = D[0],
          q = D[1],
          N = a.a.useState("success"),
          W = Object(V.a)(N, 2),
          K = W[0],
          P = W[1],
          J = a.a.useState(""),
          $ = Object(V.a)(J, 2),
          _ = $[0],
          ee = $[1],
          te = function () {
            q(!1);
          },
          ne = function (e) {
            e
              ? (P("success"), ee("Mensagem enviada com sucesso!"), q(!0))
              : (P("error"), ee("Erro ao enviar mensagem!"), q(!0));
          };
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 2,
          alignItems: "stretch",
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: 3,
          pb: 1,
          children: [
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              children: Object(f.jsx)(A.a, {
                variant: "h5",
                align: "center",
                color: e.palette.primary.dark,
                sx: { fontSize: { md: "1.9em" } },
                mb: 1,
                children: "Entre em contato",
              }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              children: Object(f.jsx)(L.a, {
                value: r,
                onChange: function (e) {
                  return i(e.target.value);
                },
                id: "name",
                label: "Nome",
                variant: "outlined",
                fullWidth: !0,
                error: E.length > 0,
                helperText: E,
              }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              children: Object(f.jsx)(L.a, {
                value: s,
                onChange: function (e) {
                  return l(e.target.value);
                },
                id: "email",
                label: "E-mail",
                variant: "outlined",
                fullWidth: !0,
                error: I.length > 0,
                helperText: I,
              }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              children: Object(f.jsx)(L.a, {
                value: b,
                onChange: function (e) {
                  return x(e.target.value);
                },
                id: "message",
                label: "Mensagem",
                variant: "outlined",
                multiline: !0,
                rows: 3,
                fullWidth: !0,
                error: z.length > 0,
                helperText: z,
              }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              md: 6,
              align: "center",
              children: Object(f.jsx)(Fe.a, {
                children: Object(f.jsx)(Te.a, {
                  control: Object(f.jsx)(Re.a, {
                    value: g,
                    onChange: function (e) {
                      return O(e.target.checked);
                    },
                    id: "subscribe",
                    defaultChecked: g,
                    color: "secondary",
                  }),
                  label: "Me inscreva no newsletter",
                }),
              }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              md: 6,
              align: "center",
              children: Object(f.jsx)(G.a, {
                onClick: function () {
                  var e = !0;
                  0 === r.length
                    ? (y("O nome \xe9 obrigat\xf3rio"), (e = !1))
                    : !(function (e) {
                        return /^[a-zA-Z ]+$/.test(String(e).toLowerCase());
                      })(r)
                    ? (y("O nome deve conter apenas letras"), (e = !1))
                    : y("");
                  0 === s.length
                    ? (B("O e-mail \xe9 obrigat\xf3rio"), (e = !1))
                    : !(function (e) {
                        return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                          String(e).toLowerCase()
                        );
                      })(s)
                    ? (B("E-mail inv\xe1lido"), (e = !1))
                    : B("");
                  0 === b.length
                    ? (Y("A mensagem \xe9 obrigat\xf3ria"), (e = !1))
                    : b.length < 10
                    ? (Y("A mensagem deve conter mais de 10 caracteres"),
                      (e = !1))
                    : b.length > 600
                    ? (Y("A mensagem deve conter menos de 600 caracteres"),
                      (e = !1))
                    : Y("");
                  if (!e) return;
                  !(function (e, t, n, r, a, i) {
                    De.apply(this, arguments);
                  })(r, s, b, g, U, ne);
                },
                variant: "contained",
                color: "secondary",
                fullWidth: !0,
                loading: R,
                children: "Enviar",
              }),
            }),
            Object(f.jsx)(X.a, {
              open: Z,
              autoHideDuration: 6e3,
              onClose: te,
              children: Object(f.jsx)(H.a, {
                onClose: te,
                severity: K,
                sx: { width: "100%" },
                children: _,
              }),
            }),
          ],
        });
      }
      function De() {
        return (De = Object(D.a)(
          k.a.mark(function e(t, n, r, a, i, o) {
            var c, s, l;
            return k.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      i(!0),
                      (c = { name: t, email: n, message: r, subscribe: a }),
                      (s = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(c),
                      }),
                      (e.next = 5),
                      fetch(Ue, s)
                    );
                  case 5:
                    return (l = e.sent), (e.next = 8), l.json();
                  case 8:
                    200 === e.sent.status ? o(!0) : o(!1), i(!1);
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Ve = n.p + "tf-lp2/static/media/logo2.30477cd7.svg";
      function Le() {
        return Object(f.jsxs)(j.a, {
          container: !0,
          spacing: 2,
          alignItems: "center",
          paddingX: { xs: 3, sm: 8, md: 20, lg: 30 },
          paddingY: 3,
          children: [
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              mt: 1,
              children: Object(f.jsx)(A.a, {
                variant: "body2",
                sx: {
                  textAlign: "left",
                  textJustify: "inter-word",
                  fontSize: { xs: "0.6em", sm: "0.7em", md: "0.8em" },
                },
                children:
                  "A Feira do Livro n\xe3o se responsabiliza por qualquer incidente relacionado a ingest\xe3o de papel. Todos os livros na feira s\xe3o vendidos como material liter\xe1rio e N\xc3O se encaixam na categoria aliment\xedcia. Caso ocorra a ingest\xe3o de celulose, procure auxilio medico. Todos os direitos reservados Feira do Livro 2021.",
              }),
            }),
            Object(f.jsx)(j.a, {
              item: !0,
              xs: 12,
              align: "center",
              mt: 2,
              children: Object(f.jsx)(h.a, {
                src: Ve,
                sx: { maxWidth: { xs: "60%", sm: "40%", md: "30%" } },
              }),
            }),
          ],
        });
      }
      var Xe = Object(d.a)({
          palette: {
            primary: { main: x.a[800], dark: x.a[900], contrastText: "#fff" },
            secondary: {
              main: u.a[700],
              light: u.a.A400,
              contrastText: "#fff",
            },
            grayText: "#656565",
          },
        }),
        He = (function (e) {
          Object(l.a)(n, e);
          var t = Object(m.a)(n);
          function n() {
            return Object(c.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return Object(f.jsxs)(b.a, {
                    theme: Xe,
                    children: [
                      Object(f.jsx)(E, {}),
                      " ",
                      Object(f.jsx)(z, {}),
                      " ",
                      Object(f.jsx)(R, {}),
                      " ",
                      Object(f.jsx)(N, {}),
                      " ",
                      Object(f.jsx)(Ye, {}),
                      " ",
                      Object(f.jsx)(ke, {}),
                      " ",
                      Object(f.jsx)(Le, {}),
                      " ",
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(r.Component);
      o.a.render(
        Object(f.jsx)(a.a.StrictMode, { children: Object(f.jsx)(He, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[106, 1, 2]],
]);
//# sourceMappingURL=main.ea7a4b4b.chunk.js.map
