(async () => {
  const grid = document.getElementById("project-grid");
  const generalRail = document.querySelector("[data-general-rail]");
  const modalOverlay = document.querySelector("[data-modal]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalDescription = document.querySelector("[data-modal-description]");
  const modalDisplay = document.querySelector("[data-modal-display]");
  const modalClose = document.querySelector("[data-close]");
  const modalThumbRow = document.querySelector("[data-thumb-row]");
  const prevBtn = document.querySelector("[data-prev]");
  const nextBtn = document.querySelector("[data-next]");

  let activeMedia = [];
  let activeTitle = "";
  let mediaIndex = 0;
  const generalList = typeof generalImages !== "undefined" && Array.isArray(generalImages) ? generalImages : [];
  let generalIndex = 0;
  let generalTimer = null;
   const projectSourceList = typeof projectSources !== "undefined" && Array.isArray(projectSources) ? projectSources : [];

  const renderCards = (list) => {
    grid.innerHTML = "";

    list.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card";
      const cover = Array.isArray(project.photos) && project.photos.length ? project.photos[0] : project.image;
      card.innerHTML = `
        <img class="card-image" src="${cover}" alt="${project.title}" loading="lazy" />
        <div class="card-body">
          <h3 class="card-title">${project.title}</h3>
          <p class="card-desc">${project.short}</p>
        </div>
      `;

      card.addEventListener("click", () => openModal(project));
      grid.appendChild(card);
    });
  };

  const setMedia = (index) => {
    if (!activeMedia.length) return;
    mediaIndex = (index + activeMedia.length) % activeMedia.length;
    const item = activeMedia[mediaIndex];
    if (!modalDisplay) return;
    modalDisplay.innerHTML = "";

    if (item.type === "video") {
      const video = document.createElement("video");
      video.className = "modal-image";
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      modalDisplay.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.className = "modal-image";
      img.src = item.src;
      img.alt = `${activeTitle} media ${mediaIndex + 1}`;
      img.loading = "lazy";
      modalDisplay.appendChild(img);
    }

    highlightThumb(mediaIndex);
  };

  const highlightThumb = (index) => {
    const buttons = modalThumbRow.querySelectorAll(".thumb");
    buttons.forEach((btn, idx) => btn.classList.toggle("is-active", idx === index));
  };

  const renderThumbs = () => {
    modalThumbRow.innerHTML = "";
    activeMedia.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "thumb";
      btn.setAttribute("aria-label", `Show media ${idx + 1}`);
      if (item.type === "video") {
        btn.innerHTML = `<div class="thumb-video">Video ${idx + 1}</div>`;
      } else {
        btn.innerHTML = `<img src="${item.src}" alt="${activeTitle} thumbnail ${idx + 1}" loading="lazy" />`;
      }
      btn.addEventListener("click", () => setMedia(idx));
      modalThumbRow.appendChild(btn);
    });
    highlightThumb(mediaIndex);
  };

  const openModal = (project) => {
    const images = Array.isArray(project.photos) ? project.photos.filter(Boolean) : [];
    const videos = Array.isArray(project.videos) ? project.videos.filter(Boolean) : [];
    activeMedia = [
      ...images.map((src) => ({ type: "image", src })),
      ...videos.map((src) => ({ type: "video", src }))
    ];
    if (!activeMedia.length && project.image) {
      activeMedia = [{ type: "image", src: project.image }];
    }
    if (!activeMedia.length) return;

    activeTitle = project.title;
    mediaIndex = 0;

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    renderThumbs();
    setMedia(0);

    modalOverlay.classList.add("is-open");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalOverlay.classList.remove("is-open");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  const handleNav = (direction) => {
    setMedia(mediaIndex + direction);
  };

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay || event.target === modalClose) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalOverlay.classList.contains("is-open")) {
      closeModal();
    }
    if (event.key === "ArrowLeft" && modalOverlay.classList.contains("is-open")) {
      handleNav(-1);
    }
    if (event.key === "ArrowRight" && modalOverlay.classList.contains("is-open")) {
      handleNav(1);
    }
  });

  prevBtn.addEventListener("click", () => handleNav(-1));
  nextBtn.addEventListener("click", () => handleNav(1));

  const setGeneralImage = (index) => {
    if (!generalRail || !generalList.length) return;
    const items = generalRail.querySelectorAll(".general-item");
    if (!items.length) return;

    generalIndex = (index + generalList.length) % generalList.length;
    items.forEach((item, idx) => item.classList.toggle("is-active", idx === generalIndex));
  };

  const startGeneralRotation = () => {
    if (!generalRail || generalList.length <= 1) return;
    clearInterval(generalTimer);
    generalTimer = setInterval(() => setGeneralImage(generalIndex + 1), 3500);
  };

  const renderGeneralRail = () => {
    if (!generalRail || !generalList.length) return;
    generalRail.innerHTML = "";

    generalList.forEach((src, idx) => {
      const item = document.createElement("figure");
      item.className = `general-item${idx === 0 ? " is-active" : ""}`;
      item.innerHTML = `<img src="${src}" alt="General photo ${idx + 1}" loading="lazy" />`;
      generalRail.appendChild(item);
    });

    if (generalList.length > 1) {
      const prev = document.createElement("button");
      prev.className = "general-nav prev";
      prev.type = "button";
      prev.setAttribute("aria-label", "Previous general image");
      prev.innerHTML = "&lsaquo;";

      const next = document.createElement("button");
      next.className = "general-nav next";
      next.type = "button";
      next.setAttribute("aria-label", "Next general image");
      next.innerHTML = "&rsaquo;";

      const handlePrev = () => {
        setGeneralImage(generalIndex - 1);
        startGeneralRotation();
      };
      const handleNext = () => {
        setGeneralImage(generalIndex + 1);
        startGeneralRotation();
      };

      prev.addEventListener("click", handlePrev);
      next.addEventListener("click", handleNext);

      generalRail.appendChild(prev);
      generalRail.appendChild(next);
    }

    generalIndex = 0;
    setGeneralImage(0);
    startGeneralRotation();

    generalRail.addEventListener("mouseenter", () => clearInterval(generalTimer));
    generalRail.addEventListener("mouseleave", startGeneralRotation);
  };

  const normalizeProject = (raw, folder, idFallback) => {
    const addExtIfMissing = (path) => {
      if (!path) return path;
      return /\.[a-z0-9]+$/i.test(path) ? path : `${path}.jpg`;
    };
    const toUrl = (entry) => {
      if (!entry) return null;
      const normalized = addExtIfMissing(entry);
      return normalized.startsWith("http") ? normalized : `${folder}${normalized}`;
    };

    const photos = Array.isArray(raw.photos) ? raw.photos.map(toUrl).filter(Boolean) : [];
    const videos = Array.isArray(raw.videos) ? raw.videos.map(toUrl).filter(Boolean) : [];
    const image = photos[0] || toUrl(raw.image) || videos[0];

    return {
      id: raw.id || idFallback || raw.name || raw.title || "untitled",
      title: raw.name || raw.title || "Untitled",
      short: raw.short || raw.description || "",
      description: raw.description || raw.short || "",
      photos,
      videos,
      image
    };
  };

  const fetchProject = async (source) => {
    const folder = source.folder || "";
    const path = source.json;
    if (!path) return null;
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Failed to load ${path}`);
      const data = await res.json();
      return normalizeProject(data, folder, source.id);
    } catch (err) {
      console.warn(err);
      return null;
    }
  };

  const loadProjects = async () => {
    if (!projectSourceList.length) {
      renderCards(projects);
      return;
    }
    const fetched = await Promise.all(projectSourceList.map(fetchProject));
    const clean = fetched.filter(Boolean);
    if (clean.length) {
      renderCards(clean);
    } else {
      renderCards(projects);
    }
  };

  renderGeneralRail();
  await loadProjects();
})();
