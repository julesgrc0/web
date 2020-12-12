 "use strict";

      var playlist = [
        "PLTwOhZBwOGY2-1ECyzNE2KDnwAe99OfPs", // Stop motion
        "PLTwOhZBwOGY3FOR9dbRy5FOPr6Wa0tJs7", // autre
        "PLTwOhZBwOGY3TSz4dvJOODT47PVWoZ4WK", // le confinement
        "PLTwOhZBwOGY2T7Q7PGIDGtOnAxY3Nzwoc", // la voleuse
        "PLTwOhZBwOGY2EIbBBboSs9LN4R3btEhz7", // course poursuite
        "PLTwOhZBwOGY1XH68AIutqXzB6OGj57CJP", // ISS
        "PLTwOhZBwOGY30haQRXnD1TFVnIiSsQ5CY", // Tout
      ];

      var $ = function $(el) {
        var all =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : false;
        return all ? document.querySelectorAll(el) : document.querySelector(el);
      };

      var options = {
        // root: $("body"),
        rootMargin: "0px",
        threshold: 1.0,
      };
      var observer = new IntersectionObserver(function (e) {
        for (var i = 0; i < e.length; i++) {
          var el = e[i].target;
          el.style.background = "transparent no-repeat center";
          el.style.backgroundSize = "cover";
          el.style.backgroundImage =
            "url('" + e[i].target.getAttribute("v-img") + "')";
        }
      }, options);

      function GET(url, param) {
        var json =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : false;
        var header =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : [];
        var data = "";
        return new Promise(function (res, rej) {
          var xhttp = new XMLHttpRequest();

          xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              res(this.responseText);
            }
          };

          if (json) {
            data = JSON.stringify(param);
            xhttp.open("GET", url, true);
            xhttp.setRequestHeader("Content-Type", "application/json");
          } else {
            for (var key in param) {
              if (data != "") {
                data += "&";
              }

              data += key + "=" + encodeURIComponent(param[key]);
            }

            xhttp.open("GET", url + "?" + data, true);
            xhttp.setRequestHeader(
              "Content-Type",
              "application/x-www-form-urlencoded"
            );
          }

          header.map(function (head) {
            xhttp.setRequestHeader(head[0], head[1]);
          });
          xhttp.send(data);
        });
      }

      function SelectPlaylist(id) {
        var ResultsMax =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 100;
        return new Promise(function (res, rej) {
          GET("https://www.googleapis.com/youtube/v3/playlistItems", {
            key: "AIzaSyCFKve5GbwICMo-SipNFgGWLTTN6U_GQzs",
            playlistId: id,
            part: "snippet, contentDetails",
	    maxResults:100
          }).then(function (data) {
            res(data);
          });
        });
      }

      function LoadAllVideo() {
        var save =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : false;

        if (save) {
          if (
            localStorage.getItem(
              new Date(Date.now()).toLocaleDateString().replace(/\//g, "-")
            ) != null
          ) {
            return localStorage.getItem(
              new Date(Date.now()).toLocaleDateString().replace(/\//g, "-")
            );
          } else {
            return new Promise(function (res, rej) {
              GET("https://www.googleapis.com/youtube/v3/playlistItems", {
                key: "AIzaSyCFKve5GbwICMo-SipNFgGWLTTN6U_GQzs",
                playlistId: playlist[playlist.length - 1],
                part: "snippet, contentDetails",
		maxResults:100
              }).then(function (data) {
                localStorage.setItem(
                  new Date(Date.now()).toLocaleDateString().replace(/\//g, "-"),
                  data
                );
                res(data);
              });
            });
          }
        } else {
          return new Promise(function (res, rej) {
            GET("https://www.googleapis.com/youtube/v3/playlistItems", {
              key: "AIzaSyCFKve5GbwICMo-SipNFgGWLTTN6U_GQzs",
              playlistId: playlist[playlist.length - 1],
              part: "snippet, contentDetails",
            }).then(function (data) {
              res(data);
            });
          });
        }
      }

      $("#blur").addEventListener("click", function () {
        $("#info-pop").style.display = "none";
        $("#video-pop").style.display = "none";
        $("#blur").style.display = "none";
        $("#video-pop iframe").src = "";
        $("#down").style.display = "none";
      });
      $("header button").addEventListener("click", function () {
        $("#down").style.display = "block";
        $("#blur").style.display = "block";
      });

      function ChangeCreateVideo() {
        var text =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : "Tout";
        $("main").innerHTML = "";
        var id = playlist[0];

        switch (text.trim()) {
          case "Tout":
            id = playlist[playlist.length - 1];
            break;

          case "Stop motion":
            id = playlist[0];
            break;

          case "Autres":
            id = playlist[1];
            break;

          case "La voleuse":
            id = playlist[3];
            break;

          case "Course Poursuite":
            id = playlist[4];
            break;

          case "ISS":
            id = playlist[5];
            break;
        }

        SelectPlaylist(id, 100).then(function (data) {
          CreateVideoElements(JSON.parse(data).items);
        });
      }

      var _loop = function _loop(posI) {
        $("#down li", true)[posI].addEventListener("click", function () {
          $("#down").style.display = "none";
          $("#blur").style.display = "none";
          ChangeCreateVideo($("#down li", true)[posI].innerText);
        });
      };

      for (var posI = 0; posI < $("#down li", true).length; posI++) {
        _loop(posI);
      }

      function OpenVideo(id) {
        $("#info-pop").style.display = "none";
        $("#blur").style.display = "block";
        $("#video-pop").style.display = "block";
        $("#video-pop iframe").src = "https://www.youtube.com/embed/" + id;
      }

      function URLPlacer(str) {
        var match = str.match(
          /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
        );
        var final = str;
        match.map(function (url) {
          final = final.replace(
            url,
            '<a href="' + url + '" target="_BLANK">' + url + "</a>"
          );
        });
        return final;
      }

      function OpenInfo(el) {
        $("#video-pop").style.display = "none";
        $("#blur").style.display = "block";
        $("#info-pop").style.display = "block";
        $("#pop-img").src = el.getAttribute("v-img");
        $("#pop-title").innerText = el.getAttribute("v-title");
        var desc = el.getAttribute("v-desc");
        $("#pop-desc").innerHTML = URLPlacer(desc);
        $("#pop-btn").setAttribute("v-id", el.getAttribute("v-id"));
      }

      $("#pop-btn").addEventListener("click", function () {
        OpenVideo($("#pop-btn").getAttribute("v-id"));
      });

      function CreateVideoElements(data) {
        data.map(function (video) {
          var d = document.createElement("div");
          var start = false;
          var swipe = [];
          d.id = video.id;
          d.setAttribute("v-title", video.snippet.title);
          d.setAttribute("v-desc", video.snippet.description);
          d.setAttribute("v-img", video.snippet.thumbnails.high.url);
          d.setAttribute("v-date", video.snippet.publishedAt);
          d.setAttribute("v-id", video.snippet.resourceId.videoId);
          d.addEventListener("click", function () {
            OpenVideo(video.snippet.resourceId.videoId);
          });
          d.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            OpenInfo(d);
          });
          d.addEventListener("touchstart", function () {
            start = true;
            swipe = [];
          });
          d.addEventListener("touchmove", function (e) {
            if (start) swipe.push(e.touches[0].clientX);
          });
          d.addEventListener("touchend", function () {
            start = false;
            var grow = 0;
            var min = 0;
            var last = 0;

            if (swipe.length > 15) { // detection begins when it is greater than 15 values
              for (var i = 0; i < swipe.length; i++) {
                if (grow == 0 && min == 0) {
                  grow = 1;
                  last = swipe[i];
                } else {
                  if (swipe[i] > last) {
                    grow++;
                  } else {
                    min++;
                  }

                  last = swipe[i];
                }
              }

              if (grow > min) {
                OpenInfo(d);
              }
            } else {
//               OpenVideo(video.snippet.resourceId.videoId);
            }
          });
          $("main").appendChild(d);
          observer.observe(d);
        });
      }

      document.addEventListener("DOMContentLoaded", function () {
        var video = LoadAllVideo(true);

        if (video instanceof Promise) {
          video.then(function (data) {
            CreateVideoElements(JSON.parse(data).items);
          });
        } else {
          CreateVideoElements(JSON.parse(video).items);
        }
      });
